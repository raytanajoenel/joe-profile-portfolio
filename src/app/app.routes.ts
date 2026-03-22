import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
      },
      {
        path: 'experience',
        loadChildren: () => import('./features/experience/experience.routes').then(m => m.EXPERIENCE_ROUTES)
      },
      {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.routes').then(m => m.PROJECTS_ROUTES)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.routes').then(m => m.CONTACT_ROUTES)
      },
      { path: '**', redirectTo: '' }
    ]
  }
];
