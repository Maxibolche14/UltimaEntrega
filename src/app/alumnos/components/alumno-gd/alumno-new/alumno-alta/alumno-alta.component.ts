import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-alta',
  templateUrl: './alumno-alta.component.html',
  styleUrls: ['./alumno-alta.component.css']
})
export class AlumnoAltaComponent implements OnInit {
  /* aca asigno nombre de titulo dle dialog q quiero mostrar para luego cambiar segun la accion a realizar*/
  public title='Alta Alumno';
  formAlumno: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AlumnoAltaComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
    )
  {
    this.formAlumno = fb.group(
      {
        id:[null],
        nombre:new FormControl('',[Validators.required]),
        apellido:new FormControl('',[Validators.required]),
        telefono: new FormControl('',[Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.required]),
        email:  new FormControl('', [Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$'), Validators.required])

      }
    );
    //console.log(data);
    /* si llega info actuo, si no no hace nada*/
    if(data){
      this.title = 'Editar Alumno';
      this.formAlumno= this.fb.group(
        {
          id:[data.id],
          nombre:new FormControl(data.nombre,[Validators.required]),
          apellido:new FormControl(data.apellido,[Validators.required]),
          telefono: new FormControl(data.telefono,[Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.required]),
          email:  new FormControl(data.email, [Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$'), Validators.required])
        }
      )
    }
    //Fin constructor
  }

  ngOnInit(): void {
  }

  guardar() {
    if(this.formAlumno.valid){
    this.dialogRef.close(this.formAlumno.value)
    }
  }

}
