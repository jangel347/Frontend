import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListMaterialComponent } from './components/list-material/list-material.component';
import { IndexComponent } from './components/index/index.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'control', component: ControlPanelComponent },
  { path: 'control/addMaterial', component: AddMaterialComponent },
  { path: 'control/listMaterial', component: ListMaterialComponent },
  { path: 'control/addProduct', component: AddProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
