
import {Component, OnInit} from 'angular2/core';
import {CM, CMService} from './cm.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: `
    <ul>
      <li *ngFor="#cm of cms"
        [class.selected]="isSelected(cm)"
        (click)="onSelect(cm)">
        <span class="badge">{{cm.id}}</span> {{cm.name}}
      </li>
    </ul>
  `,
  providers:[CMService]
})
export class CMListComponent implements OnInit {
  public cms: CM[];
  private _selectedId: number;

  constructor(
    private _service: CMService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  ngOnInit() {
	  console.log('inside it');
    //this._service.getCMs().then(cms => this.cms = cms);
	this._service.getCMsfromservice().subscribe(
	data => this.cms=data,
	error => alert(error),
	()=> console.log("Finished")
	);
  }

  isSelected(cm: CM) { return cm.id === this._selectedId; }

  onSelect(cm: CM) {
    this._router.navigate( ['CMDetail', { id: cm.id }]  );
  }
}
