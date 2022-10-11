import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private router:Router) { }
  usuarios:Usuario[];
  ngOnInit(): void {
    if(localStorage.getItem('usuarios')){
      this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    } else {
      alert('No tienes usuarios para listar, crea uno')
    }
  }
  deleteUser(id:string):void {
    this.usuarios = this.usuarios.filter( user => user.id != id );
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    alert('Usuario Eliminado')
  }
}
