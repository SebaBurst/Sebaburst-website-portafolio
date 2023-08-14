import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<boolean>();
  
  //Input values
  @Input() title?:String;
  @Input() description?:String;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
