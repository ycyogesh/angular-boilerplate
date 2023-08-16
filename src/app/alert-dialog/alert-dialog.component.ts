import { AnimateTimings } from '@angular/animations';
import { Component } from '@angular/core';
import { MessageService } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  dialogData: any;

  constructor(private messageService: MessageService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnit() {
    this.dialogData = this.config.data;
  }
  submit() {
    this.ref.close(true)
  }
  cancel() {
    this.ref.close(false)
  }
}
