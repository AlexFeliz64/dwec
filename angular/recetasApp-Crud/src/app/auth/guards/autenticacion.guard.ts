import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private autenticacionService: AutenticacionService
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.autenticacionService.isSesionIniciada()
    .pipe(
      tap(autenticado =>{
        if(!autenticado){
          this.router.navigate(['/auth/login']);
        }
        return autenticado;
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.autenticacionService.isSesionIniciada()
    .pipe(  
    tap(autenticado =>{
        if(!autenticado){
          this.router.navigate(['/auth/login']);
        }
        return autenticado;
      })
    );
  }
}
