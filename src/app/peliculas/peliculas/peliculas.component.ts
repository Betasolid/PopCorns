import { PeliculasService } from './../../servicios/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private peliculaservice: PeliculasService) { }

  peliculasArray = [];
  showDeletedMessage: boolean;
  // tslint:disable-next-line:no-inferrable-types
  searchText: string = "";

  ngOnInit() {
    this.peliculaservice.getPeliculas().subscribe(
      list => {
        this.peliculasArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('¿Seguro que quieres eliminar esta pelicula de la cartelera?')) {
      this.peliculaservice.deletePelicula($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

}
