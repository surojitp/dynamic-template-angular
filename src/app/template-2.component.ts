import { Component, Input, OnInit }  from '@angular/core';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Template Two</h3>
      <div *ngFor = "let d of data.data; let index = index" style="background: #5f9636" >
        
        <div *ngIf = "data.title">Titile ---{{d.title}}</div>
        <div *ngIf = "data.description">Description --- description{{d.title}}</div>
        <hr>

    </div>
      
    </div>
  `
})
export class TemplateTwoComponent implements OnInit{
  @Input() data: any;
  ngOnInit(){
    //console.log("INPUtData", this.data);
  }
  
  
}


