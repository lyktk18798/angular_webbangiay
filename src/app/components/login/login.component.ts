import { Component } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Request} from '../../models/request';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-root',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  returnUrl: string;
  error = '';
  request: Request = new Request();
  user: Customer = new Customer();
  loginForm = new FormGroup ({
    username: new FormControl (''),
    password: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthenticationService,
  ) {}
  OnInit () {
    // reset login status
    this.service.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.request.username = this.loginForm.value.username;
    this.request.password = this.loginForm.value.password;
    this.service.login(this.request);
  }

  forgotPass () {
    this.router.navigate(['/register']);
  }
}
