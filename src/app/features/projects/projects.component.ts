import { Component, computed, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionComponent } from '../../shared/section/section.component';
import { ChipComponent } from '../../shared/chip/chip.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionComponent, ChipComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private readonly ps = inject(PortfolioService);
  projects = computed(() => this.ps.portfolio()?.projects ?? []);
}
