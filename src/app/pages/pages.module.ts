import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [DetailsComponent, NotFoundComponent, HomeComponent, AboutComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [DetailsComponent, NotFoundComponent, HomeComponent, AboutComponent],
})
export class PagesModule {}
