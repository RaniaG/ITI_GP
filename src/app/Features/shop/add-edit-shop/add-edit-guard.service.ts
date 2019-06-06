import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AddEditGuardService implements CanActivate {

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error("Method not implemented.");
    //1- make sure the user is logged in ->auth service guard
    //2-check if the user has a shop
    //3-if the route is has id (edit) -> user must have a shop and check if the shop id is the same as user's shop id
    //-if the route doesnt have an id (add) ->user mustnt have a shop
  }

}
