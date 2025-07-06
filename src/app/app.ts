import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
//este import es necesario para poder usar las directivas ngIf, ngFor, etc. en el HTML del componente.

@Component({
  selector: 'app-root',
  standalone: true, // ← ESTA LÍNEA ES CLAVE
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})
export class App {
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
