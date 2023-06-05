import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/alumnos/models/alumno_interface';
import { AlumnoAltaComponent } from "./alumno-new/alumno-alta/alumno-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDataService } from "../../services/alumnos-data.service";
import { map, Observable  } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionUserService } from 'src/app/core/services/sesion-user.service';

@Component({
  selector: 'app-alumno-gd',
  templateUrl: './alumno-gd.component.html',
  styleUrls: ['./alumno-gd.component.css']
})
export class AlumnoGdComponent{

  //Datos Sesion
  sesionUser$!: Observable<Sesion>;
  //Valor si es sesion de Admin
  sesionAdmin?: boolean | undefined;

  //-----------------------------

  title = "Gestión Alumnos";
  alumnos$!: Observable<Alumno[]> ;
  datosAlumnosLista = new MatTableDataSource<Alumno>();
  AlumnosbCols: string [] = [];
  @ViewChild(MatPaginator)paginator!: MatPaginator;

 ngAfterViewInit() {
   this.alumnos$.subscribe( alumD => this.datosAlumnosLista.data = alumD ).unsubscribe
   this.datosAlumnosLista.paginator = this.paginator;
   this.paginator._intl.itemsPerPageLabel = 'items por pagina';
 }
  constructor(
    private dialog: MatDialog,
    private alumnosDataService: AlumnosDataService,
    private sesionUserService: SesionUserService,
    private router : Router
    )
    {
      //Armo valores para limitar visual segun sea admin o no
      this.sesionUser$ = this.sesionUserService.obtenerSesion();
      this.sesionUser$.pipe(
        map(valorSesionAdmin=>valorSesionAdmin.sesionUsuario?.userAdmin)
      ).subscribe( admin => this.sesionAdmin = admin ).unsubscribe() ;
      //Dependiendo si es admin o no armo tabla con acciones o sin ellas(Usuario admin tiene acciones, usuario comun no)
      this.sesionAdmin ? this.AlumnosbCols = ['id','nombre','apellido','telefono','email', 'acciones'] :  this.AlumnosbCols = ['id','nombre','apellido','telefono','email'];
      this.alumnos$ = this.alumnosDataService.obtenerAlumnos$();

    }

  editarAlumno(element:any){
    this.dialog.open(AlumnoAltaComponent, {
      width: '250px',
      data: element
    }).beforeClosed().subscribe(
      (res: Alumno) => {
        this.alumnosDataService.editarAlumno(res);
        this.actualizoVisualData();
      })
  }

  filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteAlumno(deleteAlumnoId: number) {
    this.alumnosDataService.deleteAlumno(deleteAlumnoId);
    this.actualizoVisualData();

  }

  nuevoAlumno() {
    this.dialog.open(
      AlumnoAltaComponent, {
        width: '250px'
      }
    ).beforeClosed().subscribe(
      (res: Alumno) => {
      if (res!=undefined) {
        let ultiAlumno = {
          ...res
        }
        //PASO VALORES AL SUBJECT DLE SERVICIO
        this.alumnosDataService.agregarAlumno(ultiAlumno);
        this.actualizoVisualData();
      }
    })
  }
  actualizoVisualData(){
    this.alumnos$.subscribe( alumD => this.datosAlumnosLista.data = alumD ).unsubscribe
    //RouteReuseStrategy es un provider de Angular
    /* Nos brinda la estrategia que nos permite decidir qué componente de ruta puede vivir más allá de su enrutamiento,
    y qué componente de ruta está condenado a ser creado y recreado cada vez que un usuario sale o ingresa a la ruta. */
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    }
/* Llave fin*/
}

