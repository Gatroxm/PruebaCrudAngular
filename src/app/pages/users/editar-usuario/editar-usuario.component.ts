import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  userCreated:FormGroup;
  usuarios: any = [];
  id:string ='';
  constructor(private router:Router, private rutaActiva: ActivatedRoute) {
    this.rutaActiva.params.subscribe( resp=> {
      this.id = resp.id;
    })
    
  }

  ngOnInit(): void {
    this.userCreated = new FormGroup({
      id: new FormControl('',Validators.required),
      nombre : new FormControl('',Validators.required),
      apellido : new FormControl('',Validators.required),
      edad : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      telefono : new FormControl('',Validators.required)
    });
    if( localStorage.getItem('usuarios')){
      this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
      const usuario = this.usuarios.filter( user => user.id === parseFloat(this.id))
      setTimeout(() => {
        this.llendoForm(usuario[0]);
      }, 100);
    }
  }
  llendoForm(user):void {
    this.userCreated.setValue({
      id: user.id,
      nombre : user.nombre,
      apellido : user.apellido,
      edad : user.edad,
      email : user.email,
      telefono : user.telefono,
    });
  }
  guardarUsuario(): void{
    const usuarios = this.usuarios.filter( user => user.id != parseFloat(this.id))
    let correo =false;
    usuarios.forEach( element => {
      if(element.email === this.userCreated.value.email){
        correo = true;
        alert("El correo debe ser único");
        this.router.navigate(['/user'])
      }
    })
    if(!correo) {
      usuarios.push(this.userCreated.value);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.router.navigate(['/user'])
    } 
  }

}
