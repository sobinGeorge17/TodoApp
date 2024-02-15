import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PendingComponent } from './components/pending/pending.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'pending',component:PendingComponent},
  {path:'inprogress',component:InprogressComponent},
  {path:'completed',component:CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
