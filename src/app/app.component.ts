import { Component, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { demodata } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[demodata]
  
})
export class AppComponent{
  count = signal("Freelance Project");
  constructor(private userservice:demodata){

  }
  ma:string[]=this.userservice.projects
  arraypro=signal(this.ma)
  
  
  
  


  name:string="Freelance Project";
  //projects:string[]=["Freelance Project","SBI Outsource","HPCL Project 1"];//

projectnames=[
  
  
  {
    id:1,
    name:"Freelance Project",
    todo:{
      titlename:"",
      startdate:"",
      enddate:""
    },

  },
  {
  id:2,
  name:"SBI Outsource",
  todo:{
    titlename:"",
    startdate:"",
    enddate:""
  },
}

]
  itemclicked(event:any){
    this.count.set(event.target.value);
  }
}
