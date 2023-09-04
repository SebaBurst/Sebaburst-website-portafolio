import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {
      @Input() nameP?:String;
      @Input() imageurl?:String;
      @Input() technology?:String;
      @Input() database?:String;
      @Input() description?:String;
  


      isModalOpen = false;

      constructor() { }
    
      ngOnInit(): void {
      }
    
      openModal() {
        this.isModalOpen = true;
      }
    
      closeModal() {
        this.isModalOpen = false;
      }
}
