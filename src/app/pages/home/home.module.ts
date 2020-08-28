import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentComponent } from './component/component.component';


@NgModule({
  declarations: [HomeComponent, ComponentsComponent, ComponentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
