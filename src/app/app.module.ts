import { GuardService } from './servicios/guard.service';
import { PeliculasService } from './servicios/peliculas.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { AddpeliculaComponent } from './peliculas/addpelicula/addpelicula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AutenticacionService } from './servicios/autenticacion.service';
import { environment } from './../environments/environment';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PeliculasComponent } from './peliculas/peliculas/peliculas.component';
import { EditpeliculasComponent } from './peliculas/editpeliculas/editpeliculas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'addpelicula', component: AddpeliculaComponent, canActivate: [GuardService]},
  { path: 'editpelicula/:key', component: EditpeliculasComponent, canActivate: [GuardService]},
  { path: 'registro', component: RegistroComponent},
  { path: 'peliculas', component: PeliculasComponent, canActivate: [GuardService]},
  { path: 'inises', component: InisesComponent},
  { path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AddpeliculaComponent,
    InisesComponent,
    RegistroComponent,
    PeliculasComponent,
    EditpeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AutenticacionService,
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
