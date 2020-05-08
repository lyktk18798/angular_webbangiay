import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderRequest} from '../../models/order.request';
import {AuthenticationService} from '../../service/authentication.service';
import {OrderService} from '../../service/order.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComfirmComponent} from '../modal-comfirm/modal-comfirm.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.css']
})
export class InfoOrderComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private orderService: OrderService,
              private modalService: NgbModal,
              private router: Router) { }
  lstProducts: Product[] = [];
  total: number = 0;
  saveForm: FormGroup;
  submitted = false;
  obj: OrderRequest = new OrderRequest();

  ngOnInit() {
    this.lstProducts = this.shoppingCartService.getCarts();
    this.total = this.lstProducts.reduce((a, b) => a + (b.quantity * b.price || 0), 0);

    this.saveForm = this.formBuilder.group({
      address: ['', Validators.required],
    });
  }

  get address() { return this.saveForm.get('address'); }
  get addressValid() {return this.submitted || this.address.invalid && (this.address.dirty || this.address.touched) && this.address.errors ; }

  buy(){
    this.submitted = true;
    if (this.saveForm.valid) {
      this.submitted = false;
    }else{
      return;
    }
    this.obj.customerId = this.authenticationService.getUserInfo().id;
    this.obj.lstProducts = this.lstProducts;
    this.obj.address = this.saveForm.value.address;

    this.orderService.buyProduct(this.obj)
    .subscribe(rs => {
      //remove cart in local storage
      this.shoppingCartService.removeCart();
      this.shoppingCartService.emitChange(this.shoppingCartService.getCarts().length);
      this.lstProducts = this.shoppingCartService.getCarts();
        const modalRef = this.modalService.open(ModalComfirmComponent);
        modalRef.componentInstance.mess = 'Your order is being approved';

        modalRef.result.then((data) => {
          this.router.navigate(['/home']);
        }, (reason) => {
          this.router.navigate(['/home']);
        });
      },
      error1 => {
        const modalRefErr = this.modalService.open(ModalComfirmComponent);
        modalRefErr.componentInstance.mess = 'An error occurred. Please try again!';

        modalRefErr.result.then((data) => {
          this.router.navigate(['/home']);
        }, (reason) => {
          this.router.navigate(['/home']);
        });
      })
  }
}
