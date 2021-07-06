import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/common/button/button.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { MenuOrderComponent } from './components/menu-order/menu-order.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    MenuSideBarComponent,
    MenuOrderComponent,
    MenuComponent,
    ProductItemComponent,
    LoginPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
