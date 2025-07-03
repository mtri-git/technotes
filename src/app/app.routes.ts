import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { TechDetailComponent } from './components/tech-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'TechNote - Technology Documentation Hub'
  },
  {
    path: 'technology/:id',
    component: TechDetailComponent,
    title: 'Technology Details - TechNote'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
