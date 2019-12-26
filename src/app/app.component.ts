import { Component, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { TemplateDirective }          from './template.directive';
import { TemplateOneComponent } from './template-1.component';
import { TemplateTwoComponent } from './template-2.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dataService: DataService){}
  @ViewChild(TemplateDirective) adHost: TemplateDirective;
  title = 'app';
  data: any;
  template: any;
  ngOnInit(){
    this.data = this.dataService.getDataService();
    console.log(this.data);
    //this.template = this.data.template;
    if(this.data.template == "template-1"){
      this.template = TemplateOneComponent;
    }else{
      this.template = TemplateTwoComponent;
    }

    
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.template);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    var componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = this.data
    console.log();
    
  }
}
