import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  states:string[];
  account:any;
  constructor(private router:Router) {
    this.states=['NJ', 'NY', 'etc'];
    this.account ={
      firstName:"",
      address1:""
    }
  }

  ngOnInit() {
  }

  onClickNext(){
    this.router.navigate(['info']);
  }

}
