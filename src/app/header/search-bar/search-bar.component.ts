// search-bar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchingtext = "";
  showMessage: boolean = false;

  toggle() {
    if (this.searchingtext !== "") {
      this.showMessage = !this.showMessage;
    } else {
      // Reset showMessage to false if no text is entered
      this.showMessage = false;
    }
  }

  onInputChange() {
    // Reset showMessage to false when the user starts typing a new text
    this.showMessage = false;
  }

  getResultMessage() {
    return this.showMessage ? `Search result for: ${this.searchingtext}` : `Searching for: ${this.searchingtext}`;
  }
}
