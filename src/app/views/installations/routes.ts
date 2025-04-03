import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./installation-list/installation-list.component').then(m => m.InstallationListComponent),
    data: {
      title: `installations`
    }
  },
  {
    path: 'reports',
    loadComponent: () => import('./installation-reports/installation-reports.component').then(m => m.InstallationReportsComponent),
    data: {
      title: `reports`
    }
  },
  {
    path: 'workers',
    loadComponent: () => import('./worker-performance/worker-performance.component').then(m => m.WorkerPerformanceComponent),
    data: {
      title: `workers`
    }
  }
];

