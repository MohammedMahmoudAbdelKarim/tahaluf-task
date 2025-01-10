import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full',
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import(
        './modules/components/category-selection/category-selection.component'
      ).then((c) => c.CategorySelectionComponent),
  },
];
