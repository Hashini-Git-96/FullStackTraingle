import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTrainglesComponent } from './Component/Traingle/list-traingles/list-traingles.component';
import { AddTraingleComponent } from './Component/Traingle/add-traingle/add-traingle.component';
import { EditTraingleComponent } from './Component/Traingle/edit-traingle/edit-traingle.component';

const routes: Routes = [
  {
    path:'traingles',
    component:ListTrainglesComponent
  },
  {
    path:'traingles/add',
    component:AddTraingleComponent
  },

  {
    path:'traingles/edit/:id',
    component:EditTraingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
