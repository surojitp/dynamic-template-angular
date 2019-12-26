import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemplateDirective }          from './template.directive';
import { TemplateOneComponent } from './template-1.component';
import { TemplateTwoComponent } from './template-2.component';
import { DataService } from './data.service';

//import { AdService }            from './ad.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDirective,
    TemplateOneComponent,
    TemplateTwoComponent
  ],
  entryComponents: [ TemplateOneComponent, TemplateTwoComponent ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
