import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginComponent, RegistryComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, RegistryComponent]
})
export class AuthModule { }
