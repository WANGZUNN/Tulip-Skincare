import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
     
     @Input() total: number=0;
  
     @Input() instock: number =0;
  
     @Input() outofstock: number=0;
}
