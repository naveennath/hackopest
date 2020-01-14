import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notify',
    loadChildren: () => import('./notify/notify.module').then( m => m.NotifyPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.bookingPageModule)
  },
  {
    path: 'avail',
    loadChildren: () => import('./avail/avail.module').then( m => m.availPageModule)
  },
  {
    path: 'trains',
    loadChildren: () => import('./trains/trains.module').then( m => m.TrainsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
