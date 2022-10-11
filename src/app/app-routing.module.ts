import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './pages/users/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './pages/users/editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './pages/users/listar-usuarios/listar-usuarios.component';

const router: Routes = [
    {path: 'user/create', component: CrearUsuarioComponent },
    {path: 'user', component: ListarUsuariosComponent },
    {path: 'user/edit/:id', component: EditarUsuarioComponent },
    {path: '', component: ListarUsuariosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {}