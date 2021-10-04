import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  public centralData: boolean;
  @Input() public newCentralData = new EventEmitter<boolean>();
  @Output() public centraDataUpdate = new EventEmitter<boolean>();

  constructor() {
    this.centralData = true;
  }
  //TODO: traer CentralData o similar hacia este componente
  ngOnInit(): void {
    console.log('desde inicio', this.centralData);
  }
  sendCentralData() {
    this.newCentralData.emit(true);
  }
}
