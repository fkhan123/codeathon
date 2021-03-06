import {Component} from 'angular2/core';
import {AuthenticationService, User} from './authentication.service';


@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                Login
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.username" id="username" 
                            type="text" class="validate" placeholder="User Name">
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate" placeholder="Password">
                    </div>
                </div>

                <span>{{errorMsg}}</span>
                <button (click)="login()" 
                    class="btn waves-effect waves-light" 
                    type="submit" name="action">Login</button>
            </div>
        </div>
		`
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}

