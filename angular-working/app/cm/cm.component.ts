import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CMListComponent}   from './cm-list.component';
import {CMDetailComponent} from './cm-detail.component';
import {CMService}         from './cm.service';


@Component({
  template:  `
    <h2>Configuration Manager</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [CMService]
})
@RouteConfig([
  {path:'/',         name: 'CMList', component: CMListComponent, useAsDefault: true},
  {path:'/:id',      name: 'CMDetail', component: CMDetailComponent}
  //{path:'/list/:id', name: 'CM',   component: CMComponent}
])
export class CMComponent { }
