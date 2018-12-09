import { PeliculasService } from './../../servicios/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editpeliculas',
  templateUrl: './editpeliculas.component.html',
  styleUrls: ['./editpeliculas.component.css']
})
export class EditpeliculasComponent implements OnInit {

  constructor(public peliculaservice: PeliculasService) { }

  submitted: boolean;
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  editPelicula () {
    this.peliculaservice.updatePelicula(this.peliculaservice.form.value);
    this.peliculaservice.form.setValue({
      $key: null,
      titulo: '',
      genero: '',
      director: '',
      fecha: '',
      estrellas: ''
    });
  }
}
