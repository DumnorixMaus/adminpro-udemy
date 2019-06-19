import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje1: number = 50;
  porcentaje2: number = 30;

  constructor() { }

  ngOnInit() {
  }
  actualizar(valor: number) {
      console.log('Recibo valor', valor);
      this.porcentaje1 = valor;
  }
  // cambiarValor( valor: number ) {
  //   if (this.porcentaje >= 100 && valor > 0) {
  //     this.porcentaje = 100;
  //     return;
  //   }
  //   if (this.porcentaje <= 0 && valor < 0) {
  //     this.porcentaje = 0;
  //     return;
  //   }

  //   this.porcentaje = this.porcentaje + valor;

  // }

}
