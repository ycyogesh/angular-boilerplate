import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private messageService : MessageService) { }

  showToast(severity : string, summary : string, detail : string = '', closable : boolean = false, life? : number, sticky? : boolean) {
    this.messageService.add({severity : severity, summary : summary, sticky : sticky, detail : detail, closable : closable, life : life});
  }
}
