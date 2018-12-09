import { PeliculasService } from './../../servicios/peliculas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addpelicula',
  templateUrl: './addpelicula.component.html',
  styleUrls: ['./addpelicula.component.css']
})
export class AddpeliculaComponent implements OnInit {

  constructor(public peliculaservice: PeliculasService) { }

  submitted: boolean;
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.peliculaservice.form.valid) {
      if (this.peliculaservice.form.get('$key').value == null) {
        this.peliculaservice.addpelicula(this.peliculaservice.form.value);
      }
    }
    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 3000);
    this.submitted = false;
    this.peliculaservice.form.reset();
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
