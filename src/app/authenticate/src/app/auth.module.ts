import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { SrcLibsComponentsModule } from '@angular-chat-app/src/libs/components';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AuthComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: WelcomeComponent }]),
    SrcLibsComponentsModule,
    AuthenticateModule,
  ],
  providers: [],
  bootstrap: [AuthComponent],
})
export class AuthModule {}
