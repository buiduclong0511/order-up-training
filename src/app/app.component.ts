import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuSideBarModel = [
    {
      title: "Goldilocks "
    },
    {
      title: "Nibbles"
    },
    {
      title: "Share Platters"
    },
    {
      title: "From The Grill"
    },
    {
      title: "Burgers & Sandwiches"
    },
    {
      title: "Pizza"
    },
    {
      title: "Sides"
    },
    {
      title: "Sides"
    },
    {
      title: "Sides"
    },
    {
      title: "Sides"
    },
    {
      title: "Sides"
    }
  ];
  
  fixedClass = false;

  ngOnInit() {
    window.onscroll = () => {
      // console.log(window.screenY)
      if (window.scrollY > 200) {
        this.fixedClass = true;
      } else {
        this.fixedClass = false;
      }
    };
  }
}
