import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './modal/modal.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalComponent],
  imports: [CommonModule, MaterialModule, RouterModule, AuthModule],
  exports: [HeaderComponent, FooterComponent],
  entryComponents: [ModalComponent],
})
export class SharedModule {}
