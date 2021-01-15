import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { loginService } from '../login/login.service';

@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate{

    constructor (
        private router : Router,
        private LoginService : loginService)
    {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.LoginService.currentUserValue;
        if (currentUser){
            return true;
        }
        this.router.navigate(['/Sign In']);
        return false;
    }
}