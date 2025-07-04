import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPage } from './reset-password.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
