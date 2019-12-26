import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[template-host]',
})
export class TemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

