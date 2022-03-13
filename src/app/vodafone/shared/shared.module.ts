import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent, InputComponent],
  exports: [ModalComponent, InputComponent],
  entryComponents: [ModalComponent],
  imports: [CommonModule, AlertModule, FormsModule],
})
export class SharedModule {}
