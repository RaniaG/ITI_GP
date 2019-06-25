import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
  showError: boolean = false;
  loading: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }
  onSubmit(e) {
    e.preventDefault();
    let user = this.logInForm.getRawValue();
    this.loading = true;
    this.authService.login(user.username, user.password).subscribe(res => {
      // debugger;
      this.router.navigate(['/profile']);

    }, err => {
      console.log(err);
      this.showError = true;
      this.loading = false;
    });
  }



}
