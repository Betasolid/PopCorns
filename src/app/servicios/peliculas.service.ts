import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private firebase: AngularFireDatabase) { }

  peliculasList: AngularFireList<any>;


  form = new FormGroup({
    $key: new FormControl(null),
    titulo: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    estrellas: new FormControl('', Validators.required)
  });

  addpelicula(pelicula) {
    this.peliculasList.push({
      titulo: pelicula.titulo,
      genero: pelicula.genero,
      director: pelicula.director,
      fecha: pelicula.fecha,
      estrellas: pelicula.estrellas
    });
  }

  getPeliculas() {
    this.peliculasList = this.firebase.list('peliculas');
    return this.peliculasList.snapshotChanges();
  }

  deletePelicula($key: string) {
    this.peliculasList.remove($key);
  }

  updatePelicula(pelicula) {
    this.peliculasList.update(pelicula.$key,
      {
      titulo: pelicula.titulo,
      genero: pelicula.genero,
      director: pelicula.director,
      fecha: pelicula.fecha,
      estrellas: pelicula.estrellas
      });
  }

  rellenaredit(pelicula) {
    this.form.setValue(pelicula);
  }

  cancelar() {
    this.form.setValue({
      $key: null,
      titulo: '',
      genero: '',
      director: '',
      fecha: '',
      estrellas: ''
    });
  }
}
