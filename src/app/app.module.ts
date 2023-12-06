import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { BottomBarComponent } from './header/bottom-bar/bottom-bar.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { ProductlistComponent } from './body/productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './body/container/container.component';
import { FilterComponent } from './body/container/filter/filter.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    BottomBarComponent,
    SearchBarComponent,
    ProductlistComponent,
    ContainerComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
