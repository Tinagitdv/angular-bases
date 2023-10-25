import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] Se puede borrar app.component.css porque no se necesitan los estilos
})
export class AppComponent {
  public title: string = 'Hola mundo';
}
