import { INavData } from '@coreui/angular';


export function getMenuForRole(userRoles: string[]) {
  const menu: INavData[] = [];

  // Super Admin Menu
  if (userRoles.includes('ROLE_ADMIN')) {
    menu.push(
      {
        name: 'Dashboard', url: '/dashboard', iconComponent: { name: 'cil-speedometer' },
        badge: {
          color: 'info',
          text: 'NEW'
        }
      },

      { name: 'Vendor Management',
        iconComponent: { name: 'cil-people' },
        children: [
          { name: 'View Vendors', url: '/vendors', iconComponent: { name: 'cil-people' } },
          { name: 'Create Vendor', url: '/vendors/create', iconComponent: { name: 'cil-user-follow' } },
          { name: 'Vendor Performance', url: '/vendors/performance', iconComponent: { name: 'cil-chart' } },
          { name: 'Vendor Financials', url: '/vendors/financials', iconComponent: { name: 'cil-file' } },
    
        ]
       },
     
      { name: 'Task Management',
        url: '/tasks',
        iconComponent: { name: 'cil-list' } ,
        children: [
          { name: 'View Tasks', url: '/tasks', iconComponent: { name: 'cil-list' } },
          { name: 'Create Task', url: '/tasks/create', iconComponent: { name: 'cil-notes' } },
          { name: 'Task Reports', url: '/tasks/reports', iconComponent: { name: 'cil-file' } },
    
        ]
       },
    
      { name: 'Reports',
        url: '/reports',
        iconComponent: { name: 'cil-chart' },
        children: [
          { name: 'System Reports', url: '/reports/system', iconComponent: { name: 'cil-chart' } },
          { name: 'Vendor Reports', url: '/reports/vendors', iconComponent: { name: 'cil-chart' } },
          { name: 'Task Reports', url: '/reports/tasks', iconComponent: { name: 'cil-file' } }
        ] 


      },
      
    

    );
  }

  // Vendor Admin Menu
  if (userRoles.includes('ROLE_VENDOR_ADMIN')) {
    menu.push(
      { name: 'Dashboard', url: '/dashboard'},

      { title: true, name: 'Task Management' },
      { name: 'My Tasks', url: '/tasks/my-tasks', iconComponent: { name: 'cil-list' } },
      { name: 'Assign Workers', url: '/tasks/assign-workers', iconComponent: { name: 'cil-user-follow' } },
      { name: 'Task History', url: '/tasks/history', iconComponent: { name: 'cil-history' } },
      { name: 'Reassign Task', url: '/tasks/reassign', iconComponent: { name: 'cil-sync' } },

      { title: true, name: 'Installation Tracking' },
      { name: 'View Installations', url: '/installations', iconComponent: { name: 'cil-map' } },
      { name: 'Installation Reports', url: '/installations/reports', iconComponent: { name: 'cil-file' } },
      { name: 'Worker Performance', url: '/installations/workers', iconComponent: { name: 'cil-chart' } }
    );
  }

  // Worker Menu
  if (userRoles.includes('ROLE_WORKER')) {
    menu.push(
      { title: true, name: 'My Work' },
      { name: 'My Installations', url: '/installations/my', iconComponent: { name: 'cil-check' } },
      { name: 'Installation History', url: '/installations/history', iconComponent: { name: 'cil-history' } },
      { name: 'Upload Reports', url: '/installations/upload', iconComponent: { name: 'cil-cloud-upload' } }
    );
  }

  return menu;
}
export const navItems: INavData[] = [];