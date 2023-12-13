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
    // if (this.searchingtext !== "") {
    //   this.showMessage = !this.showMessage;
    // } else {
    //   // Reset showMessage to false if no text is entered
    //   this.showMessage = false;
    // }
    this.showMessage = this.searchingtext.length > 0;
  }

  onInputChange() {
    // Reset showMessage to false when the user starts typing a new text

    this.showMessage = false;
  }

  getResultMessage() {
    return this.showMessage ? `Search result for: ${this.searchingtext}` : `Searching for: ${this.searchingtext}`;
  }
  

  searchText: string = '';

  @Output()
    searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

    onSearchTextChanged(){
      this.searchTextChanged.emit(this.searchText)

    }

    updateSearchText(event: any){
      this.searchText = event.target.value;
    }


}
