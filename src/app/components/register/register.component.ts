import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertService} from '../../service/alert.service';
import {Customer} from '../../models/customer';
import {AuthenticationService} from '../../service/authentication.service';
import {MustMatch} from '../../helpers/must-match.validator';
import {ModalComfirmComponent} from '../modal-comfirm/modal-comfirm.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit {
  saveForm: FormGroup;
  user: Customer = new Customer();

  constructor(private apiService: AuthenticationService,
              private router: Router,
              private alertService: AlertService,
              private formBuilder: FormBuilder,
              private modalService: NgbModal,) {
  }

  ngOnInit(): void {
    this.saveForm = this.formBuilder.group({
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      comfirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'comfirmPassword')
    });
  }

  get email() {
    return this.saveForm.get('email');
  }

  get phone() {
    return this.saveForm.get('phone');
  }

  get password() {
    return this.saveForm.get('password');
  }

  get comfirmPassword() {
    return this.saveForm.get('comfirmPassword');
  }

  get emailValid() {
    return this.email.invalid && (this.email.dirty || this.email.touched) && this.email.errors;
  }

  get phoneValid() {
    return this.phone.invalid && (this.phone.dirty || this.phone.touched) && this.phone.errors;
  }

  get passwordValid() {
    return this.password.invalid && (this.password.dirty || this.password.touched) && this.password.errors;
  }

  get comfirmPasswordValid() {
    return this.comfirmPassword.invalid && (this.comfirmPassword.dirty || this.comfirmPassword.touched) && this.comfirmPassword.errors;
  }

  register() {
    this.user.email = this.saveForm.value.email;
    this.user.phone = this.saveForm.value.phone;
    this.user.password = this.saveForm.value.password;
    this.apiService.register(this.user)
    .subscribe(
      rs => this.router.navigate(['/login']),
      error1 => {
        const modalRefErr = this.modalService.open(ModalComfirmComponent);
        modalRefErr.componentInstance.mess = 'An error occurred. Please try again!';
        modalRefErr.componentInstance.title = 'Error';
        modalRefErr.result.then((data) => {

        }, (reason) => {

        });
      }
    );
  }
}
