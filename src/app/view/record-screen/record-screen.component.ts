import { Component, OnInit } from '@angular/core';
import { AsambleaService } from 'src/app/services/asamblea.service';
import { cloneDeep } from 'src/utilities/global';

@Component({
  selector: 'app-record-screen',
  templateUrl: './record-screen.component.html',
  styleUrls: ['./record-screen.component.scss']
})
export class RecordScreenComponent implements OnInit {
  record: any = null;
  constructor(private asambleaService: AsambleaService) { }

  ngOnInit(): void {
    this.loadFormData();
  }

  async loadFormData() {
    // Todo:load id from route
    const records = await this.asambleaService.getItemById('RQxeNQnW1MXf58JrB8Fz');
    if (records && records[0]) {
      console.log('records',records)
      this.record = cloneDeep(records[0]);
    }
  }


  generatePdf() {
    console.log('lenin');
    window.print()

    window.addEventListener("afterprint", function (event) {
      console.log('lenin2', event);
    });
  }

}
