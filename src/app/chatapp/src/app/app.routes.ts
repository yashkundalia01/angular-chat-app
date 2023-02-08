import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('srcAppAuthenticate/Module').then((m) => m.AuthenticateModule),
  },
];
