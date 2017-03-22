import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CMComponent} from './cm/cm.component';

@Component({
    selector: 'my-app',
    providers: [AuthenticationService],
template: `<div id="u234" class="text" style="top: 41px; position: absolute;top: 0%;right: 0%;">
  <a (click)="logout()" href="#">Logout</a></div>
  
    <h1 class="title">Welcome</h1>
    <a [routerLink]="['CM']">Configuration Manager</a>
    <a [routerLink]="['MTE']">MTE Manager</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
 @RouteConfig([

  { 
    path: 'home/cm/...',
    name: 'CM',
    component: CMComponent,
  useAsDefault: true},
  },
  {
	  
  path: 'home/mte/...',
    
    name: 'MTE',
    component: CMComponent,
  }
  
 
]) 
export class PrivateComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}