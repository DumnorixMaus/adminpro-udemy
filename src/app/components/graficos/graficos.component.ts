import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styles: []
})
export class GraficosComponent implements OnInit {

  @Input('grafica') grafica: any = {};

  constructor() { }

  ngOnInit() {
    console.log(this.grafica);
  }

}
