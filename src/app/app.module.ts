import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ModalComponent } from './modal/modal.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TechComponent,
    ProjectsComponent,
    CardProjectComponent,
    PresentationComponent,
    ModalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
