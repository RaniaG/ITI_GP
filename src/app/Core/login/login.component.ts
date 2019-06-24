import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm : FormGroup
  users : User[];
  currentUser : User;
  emailExists : boolean;
  validPassword: string;
  incorrectPassword: boolean;

  constructor(private userService : UserService,private router :Router) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      email : new FormControl(),
      password: new FormControl(),
    })
    this.users = this.userService.getAll();
    
  }

  onSubmit(){
       this.currentUser= this.logInForm.value;
       this.users.forEach(user=>{
               if(user.email == this.currentUser.email)
               {
                 this.validPassword = user.password;
                 
               }
               else{
                 this.emailExists=true;
               }
               if(this.currentUser.password == this.validPassword)
               {
                this.router.navigate(['/home'])
               }
               else{
                 this.incorrectPassword= true;
               }
       })
      
  }

}
