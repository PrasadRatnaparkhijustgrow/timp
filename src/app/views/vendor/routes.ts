import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./vendor-list/vendor-list.component').then(m => m.VendorListComponent),
    data: {
      title: `Vendors`
    }
  },
  {
    path: 'create',
    loadComponent: () => import('./vendor-create/vendor-create.component').then(m => m.VendorCreateComponent),
    data: {
      title: `create`
    }
  },
  {
    path: 'financials',
    loadComponent: () => import('./vendor-financials/vendor-financials.component').then(m => m.VendorFinancialsComponent),
    data: {
      title: `financials`
    }
  },
  {
    path: 'performance',
    loadComponent: () => import('./vendor-performance/vendor-performance.component').then(m => m.VendorPerformanceComponent),
    data: {
      title: `financials`
    }
  },
  {
    path: 'tasks',
    loadComponent: () => import('./vendor-task/vendor-task.component').then(m => m.VendorTaskComponent),
    data: {
      title: `financials`
    }
  }
];

