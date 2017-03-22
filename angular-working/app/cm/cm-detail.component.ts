
import {Component, OnInit} from 'angular2/core';
import {CM, CMService} from './cm.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from './../dialog.service';


@Component({
  template: `
  <div *ngIf="cm">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{cm.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
	<div>
      <label>Env: </label>
      <input [(ngModel)]="editEnv" placeholder="env"/>
    </div>
	<div>
      <label>Version: </label>{{cm.version}}</div>
      <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
  </div>
  `,
  styles: ['input {width: 20em}']
})
export class CMDetailComponent implements OnInit, CanDeactivate {

  public cm: CM;
  public editName: string;
  public editEnv: string;
  public version: int;

  constructor(
    private _service: CMService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _dialog: DialogService
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.getCM(id).then(cm => {
      if (cm) {
        this.editName = cm.name;
		this.editEnv = cm.env;
		this.version = cm.version;
        this.cm = cm;
      } else { // id not found
        this.gotoCM();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
   return !this.cm ||
           this.cm.name === this.editName ||this.cm.env= this.editEnv|| 
           this._dialog.confirm('Discard changes?');
  }

  cancel() {
    this.editName = this.cm.name;
	this.editEnv = this.cm.env;
    this.gotoCM();
  }

  save() {
    this.cm.name = this.editName;
    this.gotoCM();
  }

  gotoCM() {
    let route =
      ['CMList',  {id: this.cm ? this.cm.id : null} ]

    this._router.navigate(route);
  }
}
