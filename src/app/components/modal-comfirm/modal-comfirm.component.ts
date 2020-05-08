import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-comfirm',
  templateUrl: './modal-comfirm.component.html',
  styleUrls: ['./modal-comfirm.component.scss'],
})
export class ModalComfirmComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() mess;
  ngOnInit() {
  }
}
