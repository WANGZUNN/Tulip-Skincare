import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
     
     @Input() total: number=0;
  
     @Input() instock: number =0;
  
     @Input() outofstock: number=0;

    @Output()
     selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
      
     selectedFilterRadioButton: string = "all";

     onselectedFilterRadioButtonChanged(){
      this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
     }
}
