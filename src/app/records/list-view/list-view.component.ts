import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AsambleaService } from 'src/app/services/asamblea.service';
import { ExcelService } from 'src/app/services/excel.service';
import { cloneDeep } from 'src/utilities/global';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = true;
  data: any[] = [];
  list: Array<any> = [{ loading: true }, { loading: true }, { loading: true }, { loading: true }];
  queryText?: string;;

  constructor(
    private msg: NzMessageService,
    private asambleaService: AsambleaService,
    private excelService: ExcelService,
    private router: Router,) { }

  ngOnInit(): void {
    this.onLoadData()
  }

  async onLoadData() {
    this.list = await this.asambleaService.getRemoteReports()
    this.initLoading = false;
    this.loadingMore = false;
    console.log(this.list)
  }

  async onLoadMore() {
    console.log('aaaaa', await this.asambleaService.getRemoteReports());
  }

  navigateToEdit(id: any) {
    this.router.navigate(['/', 'app', 'form', 'questionary', { id }]);
  }

  navigateToView(id: any) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/record-view'], { queryParams: { id } }));
    window.open(url, '_blank');
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }

  setNameInCollection(name: string, lastName: string, collection: Array<any>) {
    const newCollection = [];
    for (let item of collection) {
      if (!item) { item = {}; }
      item.name = name;
      item.last_name = lastName;
      newCollection.push(item);
    }
    return newCollection;
  }

  changeSearch(query: string) {
    if (query && query.length) {
      const completeList = this.asambleaService.getList();
      const filteredList = completeList.filter(item => item?.nombres?.toLowerCase().includes(query.toLowerCase()) || item?.apellidos?.toLowerCase().includes(query.toLowerCase()));
      this.list = filteredList;
    } else {
      this.list = this.asambleaService.getList();
    }
  }

  advisersFix(advisers: Array<any>) {
    const newAdvisersArray = []
    const newAdvisers: any = {}
    for (const item of advisers) {
      if (newAdvisers[item.name + item.last_name]) {
        newAdvisers[item.name + item.last_name].push(item)
      } else {
        newAdvisers[item.name + item.last_name] = [item]
      }
    }

    for (let key of Object.keys(newAdvisers) ) {
      newAdvisersArray.push(
        {
          name: newAdvisers[key][0].name,
          last_name: newAdvisers[key][0].last_name,
          asesor_1_nombre: newAdvisers[key][0].nombre,
          asesor_1_contacto: newAdvisers[key][0].contacto,
          asesor_2_nombre: newAdvisers[key][1]?.nombre || '-',
          asesor_2_contacto: newAdvisers[key][1]?.contacto || '-',
        }
      )
    }
    return newAdvisersArray;
  }


  jsonToExcel() {
    const allBlocks = ['academy', 'previous_elections', 'trayectory_service', 'companies_societies', 'shareholder_companies_societies', 'tax_declaration', 'taxes_foreign_currency', 'legal_proceedings_actor', 'legal_proceedings_defendant', 'alimony_pensions', 'advisers'];
    const allList = cloneDeep(this.list);
    const newObjectList: any = {};
    newObjectList.general = [];

    for (let item of allList) {
      const itemFields = cloneDeep(item);
      for (let key of allBlocks) {
        if (!newObjectList[key]) { newObjectList[key] = []; }

        if (item[key] && item[key].length && typeof item[key] !== 'string') {
          newObjectList[key] = newObjectList[key].concat(this.setNameInCollection(item.nombres, item.apellidos, item[key]))
        } else if (item[key] === 'No Registra') {
          newObjectList[key] = newObjectList[key].concat(this.setNameInCollection(item.nombres, item.apellidos, [{ validation: 'No Registra' }]));
        }
        delete itemFields[key];
      }
      newObjectList.general.push(itemFields)
    }
    newObjectList.advisers = this.advisersFix(newObjectList.advisers);
    this.excelService.exportAsExcelFile(newObjectList, 'asamblea');
  }
}
