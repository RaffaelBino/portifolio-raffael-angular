import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() urlImagem?: string;
  @Input() textoAltImagem?: string = `Thumbnail do projeto ${this.titulo}`;
  @Input() titulo?: string; 
  @Input() descricao?: string;
  @Input() linkDoCodigo?: string;
  @Input() linkDemoProjeto?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
