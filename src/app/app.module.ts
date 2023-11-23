import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { BottomBarComponent } from './header/bottom-bar/bottom-bar.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TopBarComponent,
    BottomBarComponent,
    SearchBarComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
