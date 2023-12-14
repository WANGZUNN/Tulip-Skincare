// search-bar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchingtext = "";
  showMessage: boolean = false;

  toggle() {
    this.showMessage = this.searchingtext.length > 0;
  }


  getResultMessage() {
    return this.showMessage ? `Search result for: ${this.searchingtext}` : `Searching for: ${this.searchingtext}`;
  }
  searchText: string = "";
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.showMessage = false;
    this.searchTextChanged.emit(this.searchingtext);
  }

    updateSearchText(event:any){
      this.searchText = event.target.value;
    }

}
