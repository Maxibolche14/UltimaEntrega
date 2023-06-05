import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/cursos/models/curso_interface';
import { CursoAltaComponent } from "./curso-new/curso-alta/curso-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { CursosDataService } from "../../services/cursos-data.service";
import { Observable  } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso-gd',
  templateUrl: './curso-gd.component.html',
  styleUrls: ['./curso-gd.component.css']
})
export class CursoGdComponent implements AfterViewInit {
  title = "Gestión Cursos";
  cursos$!: Observable<Curso[]> ;
  datosCursosLista = new MatTableDataSource<Curso>()
  CursosbCols: string [] = ['id','nombre','categoria','estado','descripcion','acciones'];
  @ViewChild(MatPaginator)paginator!: MatPaginator;

  ngAfterViewInit() {
    this.cursos$.subscribe( cursD => this.datosCursosLista.data = cursD ).unsubscribe
    this.datosCursosLista.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';
 }

  constructor(
    private dialog: MatDialog,
    private cursosDataService: CursosDataService,
    private router : Router
  )
  {
    this.cursos$ = this.cursosDataService.obtenerCursos$()
  }

  editarCurso(element:any){
    this.dialog.open(CursoAltaComponent, {
      width: '250px',
      data: element
    }).beforeClosed().subscribe(
      (res: Curso) => {
        this.cursosDataService.editarCurso(res)
        this.actualizoVisualData();
      }
    )
  }

  filtroCurso(event:Event){
   const userData = (event.target as HTMLInputElement).value;
   this.datosCursosLista.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteCurso(deleteCursoId: number) {
   this.cursosDataService.deleteCurso(deleteCursoId);
   this.actualizoVisualData();
  }

  nuevoCurso() {
   this.dialog.open(
    CursoAltaComponent, {
       width: '250px'
      }
   ).beforeClosed().subscribe(
     (res: Curso) => {
     if (res!=undefined) {
       let ultiCurso = {
         ...res
        }
       //PASO VALORES AL SERVICIO
       this.cursosDataService.agregarCurso(ultiCurso);
       this.actualizoVisualData();
      }
    })
  }

  actualizoVisualData(){
    this.cursos$.subscribe( cursD => this.datosCursosLista.data = cursD ).unsubscribe
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
