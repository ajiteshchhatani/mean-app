import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetFormComponent } from './get-form/get-form.component';
import { PostFormComponent } from './post-form/post-form.component'

const routes: Routes = [
  { path: 'get-form', component: GetFormComponent },
  { path: 'post-form', component: PostFormComponent },
  { path: '', redirectTo: '/post-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
