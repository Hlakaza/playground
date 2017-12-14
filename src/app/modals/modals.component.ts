import { Component, OnDestroy, ContentChild, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
})
export class ModalsComponent implements OnDestroy {
@ContentChild('modalHeader')header: TemplateRef<any>;
@ContentChild('modalBody')body: TemplateRef<any>;
@ContentChild('modalFooter')footer: TemplateRef<any>;
  constructor() { }

public visible = false;

  ngOnDestroy() {
    // Prevent modal from not executing its closing actions if the user navigated away (for example,
    // through a link).
    this.close();
  }
  open() {
     // document.body.style.overflow = 'hidden';
     this.visible = true;
  }

  close() {
     // document.body.style.overflow = 'auto';
    this.visible = false;
  }

 onContainerClicked(event: MouseEvent) {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.close();
    }
  }
}
