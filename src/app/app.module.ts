import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardProjectComponent } from './card-project/card-project.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TechComponent,
    ProjectsComponent,
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
