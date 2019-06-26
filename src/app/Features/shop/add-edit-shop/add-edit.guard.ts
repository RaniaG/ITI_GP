import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { AuthService } from 'src/app/_auth/auth.service';
import { ShopService } from '../shop.service';



@Injectable()
export class AddEditGuardService implements CanActivate {

  constructor(private authService: AuthService, private shopService: ShopService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    //1- make sure the user is logged in ->auth service guard
    //2-check if the user has a shop
    //3-if the route is has id (edit) -> user must have a shop and check if the shop id is the same as user's shop id
    //-if the route doesnt have an id (add) ->user mustnt have a shop
    let shop = this.shopService.getById(this.authService.currentUser.id);
    if ((shop && route.params['id']) || (!shop && !route.params['id']))
      return true;
    return false;
    // debugger;/
    // return new Observable<boolean>((observer) => {
    //   // const { next, error } = observer;
    //   debugger;
    //   if (this.authService.isAuthenticated()) {
    //     //user is logged in and has a shop
    //     debugger;

    //     // this.shopService.getById(this.authService.currentUser.id).subscribe(res => {
    //     //   debugger;
    //     //   if (route.params['id']) {
    //     //     console.log("add-edit guard true");
    //     //     observer.next(true);
    //     //   }
    //     //   else observer.error(false);
    //     // }, err => {
    //     //   //doesnt have a shop
    //     //   debugger;
    //     //   if (route.params['id']) {
    //     //     console.log("error in add-edit");
    //     //     observer.error(false);
    //     //   }
    //     //   else {
    //     //     console.log("add-edit guard true");
    //     //     observer.next(true);
    //     //   }
    //     // });

    //   }
    // })

  }

}