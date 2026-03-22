import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionComponent } from '../../shared/section/section.component';
import { ChipComponent } from '../../shared/chip/chip.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionComponent, ChipComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly ps = inject(PortfolioService);

  data = computed(() => this.ps.portfolio());
  profile = computed(() => this.data()?.profile);
  highlights = computed(() => this.profile()?.highlights ?? []);
  topSkills = computed(() => {
    const s = this.data()?.skills;
    if (!s) return [];
    return [...s.frontend.slice(0, 4), ...s.backend.slice(0, 2), ...s.cloud.slice(0, 2)];
  });
}
