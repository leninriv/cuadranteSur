import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MinistryService } from 'src/app/services/ministry.service';
import { OptionsListService } from 'src/app/services/options-list.service';
import { cloneDeep } from 'src/utilities/global';

@Component({
  selector: 'app-ministery-form',
  templateUrl: './ministery-form.component.html',
  styleUrls: ['./ministery-form.component.scss']
})
export class MinisteryFormComponent implements OnInit {
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
  arrayBlock11 = [0,1]; // asesores

  regisetrBlock1 = false;
  regisetrBlock2 = false;
  regisetrBlock3 = false;
  regisetrBlock4 = false;
  regisetrBlock5 = false;
  regisetrBlock6 = false;
  regisetrBlock7 = false;
  regisetrBlock8 = false;
  regisetrBlock9 = false;
  regisetrBlock10 = false;
  regisetrBlock11 = false;

  provincias: any[] = [];
  circunscripciones: any[] = [];
  partidos: any[] = [];

  constructor(private ministryService: MinistryService, private router: Router, private _route: ActivatedRoute, private optionsListService: OptionsListService) {
    this.form = {};
    this.provincias = this.optionsListService.getTerritorios();
    this.circunscripciones= this.optionsListService.getCircunscripciones();
    this.partidos= this.optionsListService.getPartidos();
  }

  ngOnInit(): void {
    this.validateEditMode();
  }

  async validateEditMode() {
    this.recordId = this._route.snapshot.paramMap.get('id');
    if (this.recordId) {
      const records = await this.ministryService.getItemById(this.recordId);
      this.form = records?.length ? records[0] : {}
      this.validateBlocksArray(this.form);
    }
    this.loadingScreen = false;
  }

  validateBlocksArray(form: any) {
    if (typeof form['academy'] !== 'string' && form['academy']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock1, form['academy'].length) } else if (form['academy'] === 'No Registra') { this.regisetrBlock1 = true; };
    if (typeof form['previous_elections'] !== 'string' && form['previous_elections']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock2, form['previous_elections'].length) } else if (form['previous_elections'] === 'No Registra') { this.regisetrBlock2 = true; };
    if (typeof form['trayectory_service'] !== 'string' && form['trayectory_service']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock3, form['trayectory_service'].length) } else if (form['trayectory_service'] === 'No Registra') { this.regisetrBlock3 = true; };
    if (typeof form['companies_societies'] !== 'string' && form['companies_societies']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock4, form['companies_societies'].length) } else if (form['companies_societies'] === 'No Registra') { this.regisetrBlock4 = true; };
    if (typeof form['shareholder_companies_societies'] !== 'string' && form['shareholder_companies_societies']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock5, form['shareholder_companies_societies'].length) } else if (form['shareholder_companies_societies'] === 'No Registra') { this.regisetrBlock5 = true; };
    if (typeof form['tax_declaration'] !== 'string' && form['tax_declaration']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock6, form['tax_declaration'].length) } else if (form['tax_declaration'] === 'No Registra') { this.regisetrBlock6 = true; };
    if (typeof form['taxes_foreign_currency'] !== 'string' && form['taxes_foreign_currency']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock7, form['taxes_foreign_currency'].length) } else if (form['taxes_foreign_currency'] === 'No Registra') { this.regisetrBlock7 = true; };
    if (typeof form['legal_proceedings_actor'] !== 'string' && form['legal_proceedings_actor']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock8, form['legal_proceedings_actor'].length) } else if (form['legal_proceedings_actor'] === 'No Registra') { this.regisetrBlock8 = true; };
    if (typeof form['legal_proceedings_defendant'] !== 'string' && form['legal_proceedings_defendant']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock9, form['legal_proceedings_defendant'].length) } else if (form['legal_proceedings_defendant'] === 'No Registra') { this.regisetrBlock9 = true; };
    if (typeof form['alimony_pensions'] !== 'string' && form['alimony_pensions']?.length > 1) { this.addItemsToInitialArray(this.arrayBlock10, form['alimony_pensions'].length) } else if (form['alimony_pensions'] === 'No Registra') { this.regisetrBlock10 = true; };
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
      success = await this.ministryService.updateReport(this.recordId, this.form)
    } else {
      success = await this.ministryService.addReport(this.form);
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
    this.router.navigateByUrl('/loading', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }

  onChangeRegister(value: any, blockname: string) {
    if (value) {
      this.onChangeForm({ field: blockname, value: 'No Registra' })
    } else {
      this.onChangeForm({ field: blockname, value: '' })
    }
  }
}
