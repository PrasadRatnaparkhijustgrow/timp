import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./task-list/task-list.component').then(m => m.TaskListComponent),
    data: {
      title: `Tasks`
    }
  },
  {
    path: 'create',
    loadComponent: () => import('./task-create/task-create.component').then(m => m.TaskCreateComponent),
    data: {
      title: `create`
    }
  },
  {
    path: 'reports',
    loadComponent: () => import('./task-reports/task-reports.component').then(m => m.TaskReportsComponent),
    data: {
      title: `reports`
    }
  }
];

