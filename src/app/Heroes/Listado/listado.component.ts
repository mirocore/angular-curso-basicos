import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ["Capitan América", "Ironman", "Thor", "Hulk", "Black Widow", "Hawkeye"];

    heroeBorrado: string = "";

    eliminarheroe():void{
      this.heroeBorrado = this.heroes.pop() || "";

    }

}
