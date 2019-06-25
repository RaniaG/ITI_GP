import { Component } from '@angular/core';
import { AuthService } from './_auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Artisan';

  constructor(private authService: AuthService) {


  }
  ngOnInit() {

    debugger;
    this.authService.getToken();
    if (this.authService.token) {

      this.authService.getUser()
    }
  }

}
