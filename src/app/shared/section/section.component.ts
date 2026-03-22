import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  title = input.required<string>();
  subtitle = input<string>('');
}
