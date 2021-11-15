import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListMaterialComponent } from './components/list-material/list-material.component';

const routes: Routes = [
  {path: 'addMaterial', component: AddMaterialComponent},
  { path: 'listMaterial', component: ListMaterialComponent },
  {path: 'addProduct', component: AddProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
