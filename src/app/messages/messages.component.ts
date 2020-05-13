import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="isError()" class="ui-message ui-messages-error">
      {{ text }}
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
      color: white;
      background-color: red;
      border-radius: 5px;
    }
  `]
})
export class MessagesComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  isError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
