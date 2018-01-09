import { Directive, ElementRef, HostListener, OnDestroy, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements OnDestroy {
  element: any;
  @Input() modalGameId = 0;
  @Input() modalBgUrl = '';
  constructor(private el: ElementRef, private modal: ModalService) {
    this.element = el.nativeElement;
  }

  ngOnit() {
    // console.log(this.element);
  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {

    if (this.element.getAttribute('modal-open')) {
      this.open(this.element.getAttribute('modal-open'), this.modalBgUrl, this.modalGameId);
    } else if (this.element.getAttribute('modal-close')) {
      this.close(this.element.getAttribute('modal-close'));
    }
  }

  open(modalId: string, bgUrl: string, gameId: number) {
    this.modal.open(modalId, bgUrl, gameId);

  }

  close(modalId) {
    this.modal.close(modalId);
  }

  ngOnDestroy() {
    this.modal.clearAll();
  }
}
