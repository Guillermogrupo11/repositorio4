import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    LogoApComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
