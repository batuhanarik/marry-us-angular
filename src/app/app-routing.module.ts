import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryLayoutComponent } from './components/layouts/primary-layout/primary-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./components/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: 'weddingplaces',
        loadChildren:()=>
          import('./components/wedding-place/weddingplace.routes').then((m)=>m.WEDDINGPLACES_ROUTES),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PrimaryLayoutComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
