import { Component, computed, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionComponent } from '../../shared/section/section.component';
import { ChipComponent } from '../../shared/chip/chip.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionComponent, ChipComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  private readonly ps = inject(PortfolioService);
  items = computed(() => this.ps.portfolio()?.experience ?? []);
}
