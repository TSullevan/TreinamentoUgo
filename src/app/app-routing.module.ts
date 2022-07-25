import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about/pages/about-page/about-page.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { MasterPageComponent } from './shared/pages/master-page/master-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const desktopRoutes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
      {
        path: 'home',
        component: HomePageComponent
      }
    ]
  },
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot([...desktopRoutes, ...defaultRoutes])],
  exports: [RouterModule]
})
export class AppRoutingModule { }