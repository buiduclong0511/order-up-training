import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  isShowModal: boolean = false;

  ngOnInit(): void {
    this.modalService.modalSubject.subscribe((res: any) => {
      this.isShowModal = res;
    })
  }

  handleShowModalLogin() {
    this.modalService.toggleShowModal(true);
  }
}
