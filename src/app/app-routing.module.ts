import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoterComponent } from './home/select/promoter/promoter.component';
import { HouseProductComponent } from './home/select/house-product/house-product.component';

const routes: Routes = [
  { path: "promoter", component: PromoterComponent},
  { path: "houseprod", component: HouseProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
