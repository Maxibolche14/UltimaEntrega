import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../models/inscripcion_interface';
import { InscripcionesDataService } from '../../services/inscripciones-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { InscripcionAltaComponent } from './inscripcion-new/inscripcion-alta/inscripcion-alta.component';
import { Alumno } from 'src/app/alumnos/models/alumno_interface';

@Component({
  selector: 'app-inscripcion-gd',
  templateUrl: './inscripcion-gd.component.html',
  styleUrls: ['./inscripcion-gd.component.css']
})
export class InscripcionGdComponent implements AfterViewInit {

  title = 'Gestión Inscripciones';
  insc$!: Observable<Inscripcion[]>;
  datosInscripcionesLista = new MatTableDataSource<Inscripcion>()
  InscbCols: string [] = ['id', 'alumno', 'curso', 'acciones'];
  @ViewChild(MatPaginator)paginator!: MatPaginator;



  ngAfterViewInit(): void {

    this.datosInscripcionesLista.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';

 }

  constructor(
    private dialog: MatDialog,
    private router : Router,
    private inscDataService : InscripcionesDataService
  ) {
      this.insc$ = this.inscDataService.obtenerInscripciones$();
      this.insc$.subscribe( inscD => this.datosInscripcionesLista.data = inscD ).unsubscribe
    }

  editarInscripcion(element:any){
    this.dialog.open(InscripcionAltaComponent, {
      /* width: '250px', */
      data: element
    }).beforeClosed().subscribe(
      (res: Inscripcion) => {
        this.inscDataService.editarInscripcion(res)
        this.actualizoVisualData();
      }
    )
  }

  filtroInscripcion(event:Event){
   const userData = (event.target as HTMLInputElement).value;
   this.datosInscripcionesLista.filter = userData.trim().toLocaleLowerCase();
  }

  DeleteInscripcion(deleteInscId: number) {
   this.inscDataService.deleteInscripcion(deleteInscId);
   this.actualizoVisualData();
  }

  nuevaInscripcion() {
   this.dialog.open(
    InscripcionAltaComponent, {
       /* width: '250px' */
      }
   ).beforeClosed().subscribe(
     (res: Inscripcion) => {
     if (res!=undefined) {
       let ultiInsc = {
         ...res

        };
       //PASO VALORES AL SERVICIO
       this.inscDataService.agregarInscripcion(ultiInsc);
       this.actualizoVisualData();
      }
    })
  }

  actualizoVisualData(){
    this.insc$.subscribe( InscD => this.datosInscripcionesLista.data = InscD ).unsubscribe
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

