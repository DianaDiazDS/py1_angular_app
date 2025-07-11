import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-component-counter',
  imports: [],
  templateUrl: './component-counter.html'
})

// OnInit es un ciclo de vida de Angular que se ejecuta una vez que el componente ha sido inicializado
// Este ciclo de vida es ideal para inicializar datos o hacer llamadas a servicios
export class ComponentCounter implements OnInit {
  counter: number = 0;

  @Input() title! : string;
  //lo recibe viene de el app.html y depsues se lo pasa al counte.html hijo


   
  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();
  //crear una instancia de EventEmitter para emitir eventos hacia el componente padre
  //lo usamos para enviar el contador al componente padre

  ngOnInit(): void {
    // Verificar si estamos en el navegador antes de usar localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      // this.counter =
      //   localStorage.getItem('counter') != undefined
      //     ? parseInt(localStorage.getItem('counter')!)
      //     : 0;

       const stored = localStorage.getItem('counter');
  this.counter = stored !== null ? parseInt(stored) : 0;
  
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
      // localStorage borra las claves al cerrar el navegador. Se usa para datos temporales principalmente.
      localStorage.setItem('counter', this.counter.toString());

      this.counterEmmit.emit(parseInt(localStorage.getItem('counter')!));
      // Emitir el evento con el nuevo valor del contador
      console.log('contador emitido', this.counter);
    }
  }
}