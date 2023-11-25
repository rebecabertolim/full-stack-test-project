import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { NavBarComponent } from './page-layout/nav-bar/nav-bar.component';
import { FooterComponent } from './page-layout/footer/footer.component';
import { CorpoComponent } from './corpo/corpo.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    NavBarComponent,
    FooterComponent,
    CorpoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
