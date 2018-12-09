import { AutenticacionService } from './autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class GuardService implements CanActivate {
    res = new Observable<boolean>();

    constructor(private authenticacionService: AutenticacionService) { this.res = of(true); }

    // soluciona todo el tema de la recarga a inicio
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authenticacionService.isLogged().pipe(map(user => {
            if (user) {
                return true;
            } else {
                return false;
            }
        }));

    }
}
