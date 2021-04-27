import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { FormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { GridContentComponent } from './grid-content/grid-content.component';
import { QuestionBlockComponent } from './question-block/question-block.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { AcademyBlockComponent } from './academy-block/academy-block.component';
import { PreviousElectionsBlockComponent } from './previous-elections-block/previous-elections-block.component';
import { TrayectoryServiceComponent } from './trayectory-service/trayectory-service.component';
import { CompaniesSocietiesComponent } from './companies-societies/companies-societies.component';
import { ShareholderCompaniesSocietiesComponent } from './shareholder-companies-societies/shareholder-companies-societies.component';
import { YearValueComponent } from './year-value/year-value.component';
import { LegalProceedingsComponent } from './legal-proceedings/legal-proceedings.component';
import { AlimonyPensionsComponent } from './alimony-pensions/alimony-pensions.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { UploadImageInputComponent } from './upload-image-input/upload-image-input.component';

@NgModule({
  declarations: [GridContentComponent, QuestionBlockComponent, InputFieldComponent, TextInputComponent, DateInputComponent, RadioInputComponent, SelectInputComponent, AcademyBlockComponent, PreviousElectionsBlockComponent, TrayectoryServiceComponent, CompaniesSocietiesComponent, ShareholderCompaniesSocietiesComponent, YearValueComponent, LegalProceedingsComponent, AlimonyPensionsComponent, TextAreaComponent, UploadImageInputComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    NzGridModule,
    NzCardModule,
    NzInputModule,
    NzDatePickerModule,
    NzRadioModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzUploadModule,
    NzSpinModule,
    NzCheckboxModule,
    FormsModule,
  ]
})
export class FormModule { }
