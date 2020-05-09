import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {ModalComfirmComponent} from '../modal-comfirm/modal-comfirm.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  saveForm: FormGroup;

  constructor(private router: Router,
              private apiService: AuthenticationService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.saveForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  resetPass() {
    if (this.saveForm.invalid) {
      return;
    }

    this.apiService.resetPass(this.saveForm.value.email)
    .subscribe(rs => {
      const modalRef = this.modalService.open(ModalComfirmComponent);
      modalRef.componentInstance.mess = `Reset password success!<br>
                                          You need login into your email to take new password <br>
                                           Then back to login page to login again`;

      modalRef.result.then((data) => {
        this.router.navigate(['/login']);
      }, (reason) => {
      });
    }, error1 => {
      const modalRef = this.modalService.open(ModalComfirmComponent);
      modalRef.componentInstance.title = `Error`;
      modalRef.componentInstance.mess = `An error occurred! Please try again`;

      modalRef.result.then((data) => {

      }, (reason) => {
      });
    });
  }

}
