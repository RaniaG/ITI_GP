import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_auth/auth.service';

@Injectable()
export class AddEditGuardService implements CanActivate {

  constructor(private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    //1- make sure the user is logged in ->auth service guard
    //2-check if the user has a shop
    //3-if the route is has id (edit) -> user must have a shop and check if the shop id is the same as user's shop id
    //-if the route doesnt have an id (add) ->user mustnt have a shop
    debugger;
    let canRoute = false;
    if (this.authService.isAuthenticated()) {
      //user is logged in and has a shop
      if ((route.params['id'] && route.params['id'] === this.authService.currentUser.shopId) //edit
        || (!route.params['id'] && !this.authService.currentUser.shopId))//add
        canRoute = true;
    }
    return canRoute;
  }

}
