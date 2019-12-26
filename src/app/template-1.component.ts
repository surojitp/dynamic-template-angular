import { Component, Input, OnInit }  from '@angular/core';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Template One</h3>
      <div *ngFor = "let d of data.data; let index = index" style="background: #7272d6" >
        
        <div >Titile ---{{d.title}}</div>
        <div>Description --- description{{d.title}}</div>
        <hr>

    </div>
      
    </div>
  `
})
export class TemplateOneComponent implements OnInit{
  @Input() data: any;
  ngOnInit(){
    //console.log("INPUtData", this.data);
  }
  
  
}


