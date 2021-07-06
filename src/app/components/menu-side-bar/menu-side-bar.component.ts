import { Component, Input, OnInit } from '@angular/core';

interface IMenu {
  title: string;
}

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.scss']
})
export class MenuSideBarComponent implements OnInit {
  @Input() listMenuModel?: IMenu[]

  constructor() { }

  ngOnInit(): void {
  }

}
