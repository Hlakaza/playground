import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {
  @Output() toggleModal: EventEmitter<String> = new EventEmitter<String>();
  @Output() bodyModal: EventEmitter<String> = new EventEmitter<String>();

  open(id: string, bgUrl: string, gameId:number) {
    this.setModal('open', id, bgUrl, gameId);
  }

  close(id: string) {
    this.setModal('close', id, null, 0);
  }

  setModal(type: string, id: string, bgUrl: string, gameId: number) {
    this.toggleModal.emit(`${type},${id},${bgUrl},${gameId}`);
    this.getModal();
  }

  clearAll() {
    this.toggleModal.emit('clear');
    this.getModal();
  }

  getModal() {
    return this.toggleModal;
  }

  setContent(value: any) {
    this.bodyModal.emit(`${value}`);
    this.getContent();
  }

  getContent() {
    return this.bodyModal;
  }

}
