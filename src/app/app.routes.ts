import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
   // component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'login',
        loadChildren: () => import('./views/login/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: 'vendors',
    component: DefaultLayoutComponent,
    data: {
      title: 'Vendors'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/vendor/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: 'installations',
    component: DefaultLayoutComponent,
    data: {
      title: 'installations'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/installations/routes').then((m) => m.routes)
      }
    ]
  }, {
    path: 'tasks',
    component: DefaultLayoutComponent,
    data: {
      title: 'tasks'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/task/routes').then((m) => m.routes)
      }
    ]
  },

  

  { path: '**', redirectTo: 'login' }
];
