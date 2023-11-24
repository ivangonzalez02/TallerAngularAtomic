import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from "./titulo/titulo.component";
import { BotonComponent } from "./boton/boton.component";
import { ContenidoComponent } from "./contenido/contenido.component";

@Component({
    selector: 'app-tarjeta',
    standalone: true,
    templateUrl: './tarjeta.component.html',
    styleUrl: './tarjeta.component.scss',
    imports: [CommonModule, TituloComponent, BotonComponent, ContenidoComponent]
})
export class TarjetaComponent {

}
