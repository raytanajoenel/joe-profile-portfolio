import { Component, computed, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionComponent } from '../../shared/section/section.component';
import { ChipComponent } from '../../shared/chip/chip.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionComponent, ChipComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly ps = inject(PortfolioService);

  data = computed(() => this.ps.portfolio());
  profile = computed(() => this.data()?.profile);
  skills = computed(() => this.data()?.skills);

  groups = computed(() => {
    const s = this.skills();
    if (!s) return [];
    return [
      { title: 'Front-end', items: s.frontend },
      { title: 'Back-end', items: s.backend },
      { title: 'Databases', items: s.databases },
      { title: 'Cloud', items: s.cloud },
      { title: 'Mobile / Other', items: s.mobile }
    ];
  });
}
