import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedLibraryModule } from 'ngx-anomali-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, PagesModule, SharedLibraryModule.addConfig({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
