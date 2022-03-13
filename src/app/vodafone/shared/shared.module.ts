import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  entryComponents: [ModalComponent],
  imports: [CommonModule, AlertModule, FormsModule],
})
export class SharedModule {}
