import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService
  ) { }

  formLogin = this.fb.group({
    email: [""],
    password: [""]
  })

  ngOnInit(): void {
  }

  handleCloseModal() {
    this.modalService.toggleShowModal(false)
  }

}
