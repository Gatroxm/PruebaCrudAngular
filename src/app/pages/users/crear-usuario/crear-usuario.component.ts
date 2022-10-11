import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { exit } from 'process';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  userCreated:FormGroup;
  usuarios: any = [];
  constructor(private router:Router) {
    if( localStorage.getItem('usuarios')){
      this.usuarios =JSON.parse(localStorage.getItem('usuarios'));
    }
  }

  ngOnInit(): void {
    this.userCreated = new FormGroup({
      id: new FormControl(this.usuarios.length +1),
      nombre : new FormControl('',Validators.required),
      apellido : new FormControl('',Validators.required),
      edad : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      telefono : new FormControl('',Validators.required)
    });
  }

  guardarUsuario(): void{
   let correo =false;
    this.usuarios.forEach( element => {
      if(element.email === this.userCreated.value.email){
        correo = true;
        alert("El correo debe ser único");
        this.router.navigate(['/user'])
      }
    })
    if(!correo) {
      this.usuarios.push(this.userCreated.value);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
      this.router.navigate(['/user'])
    } 
  }
}
