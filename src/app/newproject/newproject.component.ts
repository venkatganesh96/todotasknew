import { Component } from '@angular/core';
import { demodata } from '../services/form.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrl: './newproject.component.css',
  providers:[demodata]
  
})
export class NewprojectComponent {
  constructor(private userservice:demodata){

  }
  a=""
onsub(ma:HTMLInputElement){
  this.a=ma.value
  this.userservice.projects.push(this.a)

}
}
