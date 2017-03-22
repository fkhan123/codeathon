import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './login.component';
import {CMComponent} from './cm/cm.component';

import {PrivateComponent} from './private.component';

@Component({
  selector: 'my-app',
  template: `
     <router-outlet></router-outlet>
  `,
  directives: [LoginComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([

 	{ path: '...', name: 'Home', component: PrivateComponent},
	{ path: '', name: 'Login', component: LoginComponent },
])
export class AppComponent {
  
	constructor(private router: Router) {
		this.setUpEvents();
	}

	private setUpEvents(): void {
		this.router.subscribe((value: any) => this.onNext(value));
	}

	private onNext(value: any): void {
	  //uncomment to get the stacktrace
	  //throw new Exception(""); 
		console.log(value);
	}
	
}
