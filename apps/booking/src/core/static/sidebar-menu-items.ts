import { ISidebarMenuItem } from '@core/interfaces/sidebar-menu-item';

export const SideBarMenuItems: ISidebarMenuItem[] = [
  {
    display: 'Dashboard',
    icon: 'home',
    index: 0,
    routerLink: 'dashboard'
  },
  {
    display: 'Bookings',
    icon: 'calendar_view_day',
    index: 0,
    routerLink: 'bookings'
  },
];
