import {Component} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Request} from '../../models/request';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../models/customer';
import {ModalComfirmComponent} from '../modal-comfirm/modal-comfirm.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthenticationService,
    private modalService: NgbModal,
  ) {
  }

  OnInit() {
    // reset login status
    this.service.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.request.username = this.loginForm.value.username;
    this.request.password = this.loginForm.value.password;
    this.service.login(this.request)
    .subscribe(user => {
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.service.setUserInfo(JSON.stringify(user));
          this.router.navigate(['/home']);
          this.service.emitChange(true);
        }
      },
      error => {
        const modalRefErr = this.modalService.open(ModalComfirmComponent);
        modalRefErr.componentInstance.mess = 'An error occurred. Please try again!';
        modalRefErr.componentInstance.title = 'Error';
        modalRefErr.result.then((data) => {
          this.service.emitChange(false);
        }, (reason) => {
          this.service.emitChange(false);
        });

      });
  }
}
