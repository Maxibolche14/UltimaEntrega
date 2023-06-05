import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../models/usuario_interface';
import { UsuarioAltaComponent } from "./usuario-new/usuario-alta/usuario-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDataService } from "../../services/usuarios-data.service";
import { Observable  } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-gd',
  templateUrl: './usuario-gd.component.html',
  styleUrls: ['./usuario-gd.component.css']
})
export class UsuarioGdComponent implements AfterViewInit {

  title = 'Gestión Usuarios';
  users$!: Observable<Usuario[]> ;
  datosUsersLista = new MatTableDataSource<Usuario>()
  UserCols: string [] = ['id','nombre','pass','admin','acciones'];
  @ViewChild(MatPaginator)paginator!: MatPaginator;

  ngAfterViewInit() {
    this.users$.subscribe( userD => this.datosUsersLista.data = userD ).unsubscribe
    this.datosUsersLista.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';
 }

  constructor(
    private dialog: MatDialog,
    private usersDataService: UsuariosDataService,
    private router : Router
  )
  {
    this.users$ = this.usersDataService.obtenerUsers$();
  }

  editarUser(element:Usuario){
    this.dialog.open(UsuarioAltaComponent, {
      width: '250px',
      data: element
    }).beforeClosed().subscribe(
      (res: Usuario) => {
        console.log(res)
        this.usersDataService.editarUser(res)
        this.actualizoVisualData();
      }
    )
  }

  filtroUser(event:Event){
   const userData = (event.target as HTMLInputElement).value;
   this.datosUsersLista.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteUser(deleteUserId: number) {
   this.usersDataService.deleteUser(deleteUserId);
   this.actualizoVisualData();
  }

  nuevoUser() {
   this.dialog.open(
    UsuarioAltaComponent, {
       width: '250px'
      }
   ).beforeClosed().subscribe(
     (res: Usuario) => {
     if (res!=undefined) {
       let ultiUser = {
         ...res
        }
       //PASO VALORES AL SERVICIO
       this.usersDataService.agregarUser(ultiUser);
       this.actualizoVisualData();
      }
    })
  }

  actualizoVisualData(){
    this.users$.subscribe( usersD => this.datosUsersLista.data = usersD ).unsubscribe
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

