import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  // Clear all on load
  modals = [];
  modalToggle = [];
  modalStyles = {};
  modalContent: any;
  modalGameId = 0;
  modalUrl = '';
  constructor(private modal: ModalService, private render: Renderer2) { }

  ngOnInit() {

    // Listen to modal service to toggle open / close
    this.modal.getModal().subscribe(value => {
      // Split string into params.
      
      this.modalToggle = value.split(',');

      if (this.modalToggle[0] === 'clear') {

        this.modals = [];
        this.render.removeClass(document.body, 'modal-open');
      } else {        
        this.modalToggle[0] === 'open' ? this.modalOpen(this.modalToggle[1]) : this.modalClose(this.modalToggle[1]);
        if (this.modalToggle[1] === "rmm"){
          this.modalUrl = this.modalToggle[2];
         } 
        else {

        }

        this.modalStyles = this.modalToggle[2].length > 10 ? { 'background-image': `url(${this.modalToggle[2]})` } : '';
      }
      if (this.modalToggle[3] !== 0) {
        this.modalGameId = this.modalToggle[3];
      }

    });

    this.modal.getContent().subscribe(value => {
      this.modalContent = value;
    });
  }

  ngOnDestroy() {
    this.modalClear();
  }

  modalOpen(id: string) {
    this.modals[id] = true;
    this.render.addClass(document.body, 'modal-open');
  }

  modalClose(id: string) {
    this.modals[id] = false;
    this.render.removeClass(document.body, 'modal-open');
  }

  modalClear() {
    this.modal.clearAll();
  }

}
