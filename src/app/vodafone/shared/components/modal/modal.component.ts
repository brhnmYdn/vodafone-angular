import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'vodafone-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  modalTitle?: string;
  closeBtnName?: string;
  list: string[] = [];
  modalMessage!: string;
  modalClass: string = 'modal-body alert-success';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    console.log('list', this.list);
  }
}
