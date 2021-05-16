import { Component, OnInit } from '@angular/core';
import { AsambleaService } from 'src/app/services/asamblea.service';
import { ActivatedRoute } from '@angular/router';
import { cloneDeep } from 'src/utilities/global';

@Component({
  selector: 'app-record-screen',
  templateUrl: './record-screen.component.html',
  styleUrls: ['./record-screen.component.scss']
})
export class RecordScreenComponent implements OnInit {
  record: any = null;
  showButton = true;
  recordId: any = null;
  constructor(private asambleaService: AsambleaService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.detectRouteParams();
  }

  detectRouteParams() {
    this._route.queryParams.subscribe(params => {
      if (params['id']) {
        this.loadFormData(params['id']);
      }
    })
  }

  changeAgeElection(ageNumber: string) {
    try {
      const parseDate = ageNumber.split(',')
      const decimals = parseFloat(parseDate[1])
      const meses = parseFloat(`0.${decimals}`) * 12;
      return `${parseDate[0]} años, ${meses.toFixed(0)} meses`
    } catch (error) {

    }
    return ageNumber
  }


  async loadFormData(id: any) {
    // Todo:load id from route
    const records = await this.asambleaService.getItemById(id);
    if (records && records[0] && records[0].cedula_de_identidad) {
      this.record = cloneDeep(records[0]);
    }
  }

  generatePdf() {
    this.showButton = false;
    setTimeout(() => {
      window.print();
    }, 500);


    setTimeout(() => {
      this.showButton = true;
    }, 5000);


    // window.addEventListener("afterprint", function (event) {
    //   console.log('lenin2', event);
    // });
  }

}
