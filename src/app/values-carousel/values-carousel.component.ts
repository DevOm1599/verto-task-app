import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-values-carousel',
  standalone: true,
  templateUrl: './values-carousel.component.html',
  styleUrls: ['./values-carousel.component.scss'],
  imports: [CommonModule],
})
export class ValuesCarouselComponent {
  values = [
    {
      title: 'Champion the mission',
      description:
        'We are driven by curiosity and belief to solve cross-border payments pain points globally.',
      icon: 'assets/champion.png',
    },
    {
      title: 'Be the best',
      description:
        'We are open, take appropriate risks, adopt a results-driven approach, and are the best at what we do.',
      icon: 'assets/best.png',
    },
    {
      title: 'We work as one',
      description:
        'We are creative in solving existing problems and bold in designing a new and better experience for customers.',
      icon: 'assets/work_one.png',
    },
    {
      title: 'Go the extra mile',
      description:
        'We deliver beyond what is possible. We make impossible possible.',
      icon: 'assets/mile.png',
    },
    {
      title: 'Customer first',
      description:
        'We are creative in solving existing problems and bold in designing a new and better experience for customers.',
      icon: 'assets/customer_first.png',
    },
    {
      title: 'Run with it',
      description:
        'We are determined, seek challenges, take ownership of tasks, act fast and deliver results.',
      icon: 'assets/run.png',
    },
  ];
}
