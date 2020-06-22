import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { WantCarComponent } from './want-car/want-car.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { BrandsComponent } from './brands/brands.component';
import { ModelComponent } from './model/model.component';
import { CustomizeComponent } from './customize/customize.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, WantCarComponent, HowWorksComponent, BrandsComponent, ModelComponent, CustomizeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
