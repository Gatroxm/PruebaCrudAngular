import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './users/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './users/listar-usuarios/listar-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './users/editar-usuario/editar-usuario.component';


const pages =[CrearUsuarioComponent, ListarUsuariosComponent, EditarUsuarioComponent];
@NgModule({
  declarations: [pages],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [pages]
})
export class PagesModule { }
