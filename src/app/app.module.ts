import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { BussinessComponent } from './home/bussiness/bussiness.component';
import { HowToComponent } from './home/how-to/how-to.component';
import { SelectComponent } from './home/select/select.component';
import { FooterComponent } from './footer/footer.component';
import { PromoterComponent } from './home/select/promoter/promoter.component';
import { HouseProductComponent } from './home/select/house-product/house-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    BussinessComponent,
    HowToComponent,
    SelectComponent,
    FooterComponent,
    PromoterComponent,
    HouseProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
