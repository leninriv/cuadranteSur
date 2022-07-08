import { Component, OnInit } from '@angular/core';
import { MinistryService } from 'src/app/services/ministry.service';
import { ActivatedRoute } from '@angular/router';
import { cloneDeep } from 'src/utilities/global';

@Component({
  selector: 'app-ministry-view',
  templateUrl: './ministry-view.component.html',
  styleUrls: ['./ministry-view.component.scss']
})
export class MinistryViewComponent implements OnInit {
  record: any = null;
  showButton = true;
  recordId: any = null;
  constructor(private ministryService: MinistryService, private _route: ActivatedRoute) { }

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

  ageCalculation(birthday: string) {
    const hoy = new Date();
    const cumpleanos = new Date(birthday);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad.toString();
  }

  changeAgeElection(ageNumber: string) {
    try {
      const parseDate = ageNumber.split(',')
      const decimals = parseFloat(parseDate[1])
      const meses = parseFloat(`0.${decimals}`) * 12;
      return `${parseDate[0]} AÑOS, ${meses.toFixed(0)} MESES`
    } catch (error) {

    }
    return ageNumber
  }


  async loadFormData(id: any) {
    // Todo:load id from route
    const records = await this.ministryService.getItemById(id);
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
