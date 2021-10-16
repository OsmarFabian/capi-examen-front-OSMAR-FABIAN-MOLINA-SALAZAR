import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  users!: any;

  constructor(private UsuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.UsuariosService.getProducts()
      .pipe(
        tap((users: any) => {
          this.users = users;
          this.users.forEach((user: any) => {
            user.domicilio =
              user.userdomicilio.domicilio +
              ', ext:' +
              user.userdomicilio.numero_exterior +
              ', Col:' +
              user.userdomicilio.colonia +
              ', CP:' +
              user.userdomicilio.cp +
              ', Ciudad:' +
              user.userdomicilio.ciudad;
          });
        })
      )
      .subscribe();
  }
}
