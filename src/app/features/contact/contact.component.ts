import { Component, computed, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly ps = inject(PortfolioService);
  links = computed(() => this.ps.portfolio()?.profile.links);
}
