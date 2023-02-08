import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcLibsComponentsModule } from '@angular-chat-app/src/libs/components';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthenticateRoutingModule, SrcLibsComponentsModule],
})
export class AuthenticateModule {}
