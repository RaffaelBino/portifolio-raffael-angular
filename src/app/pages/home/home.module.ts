import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { CardComponent } from './projetos/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjetosComponent,
    SobreComponent,
    ContatoComponent,
    CardComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent, ProjetosComponent, SobreComponent, ContatoComponent],
})
export class HomeModule {}
