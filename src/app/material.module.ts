import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginator} from '@angular/material/paginator';
/* import { MatTableFilterModule } from '@angular/material/';*/
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports:[
      CommonModule,
      MatTableModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      ReactiveFormsModule,
      MatDialogModule,
      CdkTableModule,
      MatListModule,
      MatSlideToggleModule,
      MatPaginatorModule,
      MatStepperModule,
      MatCheckboxModule,
      MatMenuModule

    ],
    exports:[
      CommonModule,
      MatTableModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      ReactiveFormsModule,
      MatDialogModule,
      CdkTableModule,
      MatListModule,
      MatSlideToggleModule,
      MatPaginatorModule,
      MatPaginator,
      MatStepperModule,
      MatCheckboxModule,
      MatMenuModule
    ],

})
export class MaterialModule{}
