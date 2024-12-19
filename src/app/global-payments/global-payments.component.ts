import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Globe from 'three-globe';

@Component({
  selector: 'app-global-payments',
  standalone: true,
  templateUrl: './global-payments.component.html',
  styleUrls: ['./global-payments.component.scss'],
})
export class GlobalPaymentsComponent implements AfterViewInit {
  @ViewChild('globeContainer') globeContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.initGlobe();
  }

  initGlobe() {
    const globe = new Globe()
      .globeImageUrl('assets/globe1.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .arcsData([
        {
          startLat: 40.7128,
          startLng: -74.006,
          endLat: 35.6895,
          endLng: 139.6917,
          color: 'red', // NY to Tokyo
        },
        {
          startLat: 48.8566,
          startLng: 2.3522,
          endLat: 19.076,
          endLng: 72.8777,
          color: 'blue', // Paris to Mumbai
        },
        {
          startLat: -33.8688,
          startLng: 151.2093,
          endLat: 37.7749,
          endLng: -122.4194,
          color: 'green', // Sydney to SF
        },
        {
          startLat: 51.5074,
          startLng: -0.1278,
          endLat: 34.0522,
          endLng: -118.2437,
          color: 'orange', // London to LA
        },
        {
          startLat: 39.9042,
          startLng: 116.4074,
          endLat: -22.9068,
          endLng: -43.1729,
          color: 'purple', // Beijing to Rio
        },
      ])
      .arcColor('color')
      .arcStroke(0.8)
      .arcDashLength(0.8)
      .arcDashGap(1)
      .arcDashInitialGap(1)
      .arcDashAnimateTime(2500); // Reduced value for increased speed

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 2000);
    camera.position.set(0, 0, 165);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(600, 600);
    this.globeContainer.nativeElement.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    scene.add(globe);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const animate = () => {
      globe.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }
}
