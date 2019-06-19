import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
   // console.log('leyenda', this.leyenda);

   }

  ngOnInit() {
   // console.log('leyenda', this.leyenda);
 
   console.log('porcentaje', this.porcentaje);

  }

  onChange(nuevoValor: number) {
  console.log('Nuevo valor', nuevoValor);
  // let elemHTML: any = document.getElementsByName('porcentaje')[0];
  // console.log(this.txtPorcentaje);
  if ( nuevoValor >= 100) {
    this.porcentaje = 100;
  } else if (nuevoValor <= 0) {
    this.porcentaje = 0;
  } else {
      this.porcentaje = nuevoValor;
  }
  // elemHTML.value = this.porcentaje;
  this.txtPorcentaje.nativeElement.value = this.porcentaje;
  this.cambioValor.emit(this.porcentaje);

  }

  cambiarValor( valor: number ) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);

    this.txtPorcentaje.nativeElement.focus();
  }

}
