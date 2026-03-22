import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mobileOpen = signal(false);

  toggle(): void {
    this.mobileOpen.update(v => !v);
  }

  close(): void {
    this.mobileOpen.set(false);
  }
}
