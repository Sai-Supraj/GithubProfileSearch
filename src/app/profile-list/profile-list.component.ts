import { Component, OnInit, Input } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Subscription } from 'rxjs';
import {ProfileServiceService}  from '/Users/kayyamsaisupraj/Documents/UItypescript/src/app/profile-service/profile-service.service'

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  title: string;
  userData:  any;
  user: any


  constructor( private search  : ProfileServiceService) {   }
      
  onsearch(){
     
    this.search.getUsers(this.title).subscribe((result:any) => {
      this.userData = result; })

  }
  onsort(){
      
     
    this.search.getSortUser(this.title).subscribe((result:any) => {
      this.userData = result; })


  }
  
  ngOnInit(): void {
  }


}
