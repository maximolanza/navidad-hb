import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './pages/tree/tree.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/Tree',
    pathMatch: 'full'
  },{
    path: 'Tree',
    component: TreeComponent,
    data: { title: 'Tree' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
