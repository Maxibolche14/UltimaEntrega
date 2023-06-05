import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, observable } from 'rxjs';
import { Alumno } from 'src/app/alumnos/models/alumno_interface';
import { AlumnosDataService } from 'src/app/alumnos/services/alumnos-data.service';
import { Curso } from 'src/app/cursos/models/curso_interface';
import { CursosDataService } from 'src/app/cursos/services/cursos-data.service';

@Component({
  selector: 'app-inscripcion-alta',
  templateUrl: './inscripcion-alta.component.html',
  styleUrls: ['./inscripcion-alta.component.css']
})

export class InscripcionAltaComponent implements OnInit {



  public title='Alta Inscripcion';

  // Conf STEPER
  //----------------------------------------------------------
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['' , Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  //----------------------------------------------------------

  //FORMULARIO ENVIO FINAL
  formInscripcion: FormGroup;

  //DATOS API ALUMNOS y CURSOS
  alum$!: Observable<Alumno[]>
  curs$!: Observable<Curso[]>
  datosAlumnosLista = new MatTableDataSource<Alumno>();
  AlumnosbCols: string [] = ['id','nombreapellido', 'acciones'];
  datosCursosLista = new MatTableDataSource<Curso>();
  CursosbCols: string [] = ['id','nombre', 'acciones'];
  @ViewChild(MatPaginator)paginator!: MatPaginator;


  /* selectedItems!:string[]; */



  constructor(

    private _formBuilder: FormBuilder,
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<InscripcionAltaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private alumServData : AlumnosDataService,
    private cursServData : CursosDataService

    ) {
      this.alum$ = this.alumServData.obtenerAlumnos$();
      this.curs$ = this.cursServData.obtenerCursos$();
      this.formInscripcion = this.fb.group(
        {
          id:[''],
          inscAlumno:[''],
          inscCurso:['']
        });
        if (data) {
          this.formInscripcion = this.fb.group(
            {
              id:[data.id],
              inscAlumno:[data.inscAlumno],
              inscCurso:[data.inscCurso]
            });
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: [data.inscAlumno.nombre , Validators.required],
            });
            this.secondFormGroup = this._formBuilder.group({
              secondCtrl: [data.inscCurso.nombre, Validators.required],
            });
        };


    }
  ngAfterViewInit() {
    this.datosAlumnosLista.paginator = this.paginator;
    this.datosCursosLista.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';
  }

  ngOnInit(): void {
    this.alum$.subscribe( alumD => this.datosAlumnosLista.data = alumD )
    this.curs$.subscribe( cursD => this.datosCursosLista.data = cursD )

  }

  guardar() {

    if(this.formInscripcion.valid){
     this.dialogRef.close(this.formInscripcion.value)
     }
   }

   filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase();
  }

  getAlumnoInscipcion(e:any, datosAlumnoChecked: Alumno ){
      if(e.checked)	{
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: [datosAlumnoChecked.nombre +' '+ datosAlumnoChecked.apellido, Validators.required],
        });

        this.formInscripcion.value.inscAlumno = {
          id: datosAlumnoChecked.id,
          nombre: datosAlumnoChecked.nombre,
          apellido: datosAlumnoChecked.apellido,
          telefono: datosAlumnoChecked.telefono,
          email: datosAlumnoChecked.email
        }

      }
    else{
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      this.firstFormGroup.invalid;
    }

  }

  getCursoInscipcion(e:any, datosCursoChecked: Curso ){
      if(e.checked)	{
        this.secondFormGroup = this._formBuilder.group({
          secondCtrl: [datosCursoChecked.nombre , Validators.required],
        });
        this.formInscripcion.value.inscCurso = {
          id: datosCursoChecked.id,
          nombre: datosCursoChecked.nombre,
          categoria: datosCursoChecked.categoria,
          estado: datosCursoChecked.estado,
          descripcion: datosCursoChecked.descripcion
        }
      }
    else{
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['' , Validators.required],
      });
      this.secondFormGroup.invalid;
    }
  }
}
