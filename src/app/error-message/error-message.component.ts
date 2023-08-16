import { Component ,Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() data: any;
  @Input() dataName: string = '';
  @Input() minLength: number = 0;
  @Input() maxLength: number = 0;
}
