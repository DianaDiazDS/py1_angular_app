import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-counter',
  imports: [],
  templateUrl: './component-counter.html'
})

// OnInit es un ciclo de vida de Angular que se ejecuta una vez que el componente ha sido inicializado
// Este ciclo de vida es ideal para inicializar datos o hacer llamadas a servicios
export class ComponentCounter implements OnInit {
  counter: number = 0;

  ngOnInit(): void {
    // Verificar si estamos en el navegador antes de usar localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      this.counter =
        localStorage.getItem('counter') != undefined
          ? parseInt(localStorage.getItem('counter')!)
          : 0;
    } else {
      this.counter = 0;
    }
    console.log('creando componente');
  }

  setCounter(): void {
    this.counter++;
    // Verificar si estamos en el navegador antes de usar localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      // Se podria utilizar sessionStorage en vez de local storage pero es mejor local porque las claves se mantienen
      // aunque se cierre el navegador y solo se borran cuando se hace de forma manual.
      // SessionStorage borra las claves al cerrar el navegador. Se usa para datos temporales principalmente.
      localStorage.setItem('counter', this.counter.toString());
    }
  }
}