import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
//este import es necesario para poder usar las directivas ngIf, ngFor, etc. en el HTML del componente.

import { ComponentCounter } from './component-counter/component-counter';
@Component({
  selector: 'app-root',
  standalone: true, // ← ESTA LÍNEA ES CLAVE
  imports: [RouterOutlet, CommonModule, ComponentCounter],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})
export class App implements OnInit{
  protected title = 'Angular APP';
  title2 = 'Angular APP';

  componente2 = 'un string';
  componente3 = 34;
  componentes4 = [1, 2, 3, 4, 5];
  componentes5 = ['ana', 'pepe', 'luis', 'maria', 'juan'];
  componente6 = {key : 'value', key2: 'value2', key3: 'value3'};
  componentes7 = [
  { id: 111, valor: 'valor1', persona: 'persona1' },
  { id: 222, valor: 'valor2', persona: 'persona2' },
  { id: 333, valor: 'valor3', persona: 'persona3' }
  ]
  componentes8 = []

  visible: boolean = false;
  setVisible(): void {this.visible = !this.visible; console.log('visible', this.visible); }
  testClick() {
    console.log('¡Click detectado!');
  }

//classe como pasar varibales de un componente padre a un componente hijo
  // En Angular, puedes pasar variables de un componente padre a un componente hijo utilizando la propiedad
  // @Input() en el componente hijo y enlazando la propiedad en el HTML del componente padre.
  // Aquí tienes un ejemplo básico de cómo hacerlo: 

  subtitle: string = 'subtitulo enviado desde el padre para contador de sesion';
  //lo llamamos en en counter.ts y en la app html


  //hijo a padre
  counter: number =0;

  setCounter(event:number): void {
    this.counter = event;
    console.log('contador recibido del hijo', this.counter);
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('counter');
      this.counter = stored !== null ? parseInt(stored) : 0;
    }
  }

}
/**
 * Componente principal de la aplicación Angular.
 *
 * @component
 * @selector app-root - Selector utilizado para insertar este componente en el HTML.
 * @imports RouterOutlet - Importa el RouterOutlet, que permite la navegación entre rutas hijas dentro de la aplicación.
 * @templateUrl ./app.html - Ruta al archivo de plantilla HTML asociado a este componente.
 * @styleUrl ./app.css - Ruta al archivo de estilos CSS asociado a este componente.
 */
// export class App {
  /**
   * Título de la aplicación, utilizado como propiedad protegida.
   */
//   protected title = 'py1_angular_app';
// }
