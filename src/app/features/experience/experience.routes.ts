import { Routes } from '@angular/router';

export const EXPERIENCE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./experience.component').then(m => m.ExperienceComponent)
  }
];
