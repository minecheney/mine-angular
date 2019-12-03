import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Const} from '../shared/utils/const';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //取得用户访问的URL；
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    //如果用户已经登录就放行
    let token = sessionStorage.getItem(Const.accessToken());

    if (token != null) {
      return true;
    }

    //否则存储要访问的URL到本地
    sessionStorage.setItem(Const.redirectUrl(), url);

    //然后导航到登录页面
    this.router.navigate(['/login'])
    //返回false，取消导航
    return false;
  }
}
