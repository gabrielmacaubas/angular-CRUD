import { Component } from '@angular/core';
import { Cafe } from '../shared/model/cafe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Café App';
  cafe: Cafe;
  cafes: Cafe[];

  constructor() {
    this.cafe = new Cafe(null, null, null);
    this.cafes = [];
  }

  inserirCafe(): void {
    this.cafes.push(this.cafe);
    this.cafe = new Cafe(null, null, null);
  }

  
  editar(cafe: Cafe): void {
    this.cafe = cafe;
  }

  pararEdicao() {
    this.cafe = new Cafe(null, null, null);
  }

  
  excluir(cafeARemover: Cafe): void {
    const indx: number = this.cafes.findIndex(cafe =>
      cafe.nome === cafeARemover.nome);
    
    this.cafes.splice(indx, 1);
  
  }
  
}
