import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'py1_angular_app';
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
