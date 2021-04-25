import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AsambleaService } from 'src/app/services/asamblea.service';
import { cloneDeep } from 'src/utilities/global';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent implements OnInit {
  value?: string;
  recordId: any = null;
  form: any;
  saving = false;
  loadingScreen = true;
  arrayBlock1 = [0]; // academy-block
  arrayBlock2 = [0]; // previous-elections-block
  arrayBlock3 = [0]; // public service trayectory
  arrayBlock4 = [0]; // companies and Societies
  arrayBlock5 = [0]; // shareholder companies and Societies
  arrayBlock6 = [0]; // tax declaration
  arrayBlock7 = [0]; // Declaration of tax on the exit of foreign currency
  arrayBlock8 = [0]; // Legal proceedings actor
  arrayBlock9 = [0]; // Legal proceedings defendant
  arrayBlock10 = [0]; // Alimony pensions

  constructor(private asambleaService: AsambleaService, private router: Router, private _route: ActivatedRoute,) {
    this.form = {};
  }

  ngOnInit(): void {
    this.validateEditMode();
  }

  async validateEditMode() {
    this.recordId = this._route.snapshot.paramMap.get('id');
    if (this.recordId) {
      const records = await this.asambleaService.getItemById(this.recordId);
      this.form = records?.length ? records[0] : {}
      this.validateBlocksArray(this.form);
    }
    this.loadingScreen = false;
  }

  validateBlocksArray(form: any) {
    if (form['academy']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock1, form['academy'].length) };
    if (form['previous_elections']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock2, form['previous_elections'].length) };
    if (form['trayectory_service']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock3, form['trayectory_service'].length) };
    if (form['companies_societies']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock4, form['companies_societies'].length) };
    if (form['shareholder_companies_societies']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock5, form['shareholder_companies_societies'].length) };
    if (form['tax_declaration']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock6, form['tax_declaration'].length) };
    if (form['taxes_foreign_currency']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock7, form['taxes_foreign_currency'].length) };
    if (form['legal_proceedings_actor']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock8, form['legal_proceedings_actor'].length) };
    if (form['legal_proceedings_defendant']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock9, form['legal_proceedings_defendant'].length) };
    if (form['alimony_pensions']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock10, form['alimony_pensions'].length) };
  }


  addItemsToInitialArray(array: Array<number>, newLength: number) {
    for (var i = 1; i < newLength; i++) {
      array.push(i);
    }
  }

  onChangeForm(event: any) {
    const formCopy = cloneDeep(this.form);
    formCopy[event.field] = event.value;
    this.form = { ...formCopy };
    console.log('event', this.form);
  }

  onChangeFormBlock(event: any) {
    const { blockname, index, value } = event;
    const { field } = value;
    let formCopy = cloneDeep(this.form);
    if (!formCopy[blockname]) {
      formCopy[blockname] = new Array();
    }
    if (!formCopy[blockname][index]) {
      formCopy[blockname][index] = {};
    }
    formCopy[blockname][index][field] = value.value;
    this.form = { ...formCopy };
    console.log('event block', this.form);
  }

  pushBlockItem(array: Array<number>) {
    array.push(array.length);
  }

  async saveForm() {
    let success = false;
    this.saving = true;
    // Edit or add mode
    if (this.recordId) {
      success = await this.asambleaService.updateReport(this.recordId, this.form)
    } else {
      success = await this.asambleaService.addReport(this.form);
    }
    if (success) {
      setTimeout(() => {
        this.resetComponent();
      }, 1000);
    } else {
      this.saving = false;
    }
  }

  resetComponent() {
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
