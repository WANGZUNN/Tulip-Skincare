// container.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() total: number = 0;
  @Input() instock: number = 0;
  @Input() outofstock: number = 0;

  selectedFilterRadioButton: string = 'all';
  searchText: string = "";

  setsearchtext(value: string) {
    this.searchText = value;
  }
}
