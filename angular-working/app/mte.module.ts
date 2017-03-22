import { NgModule }      from 'angular2/core';

import { FormsModule }   from 'angular2/forms';

import { MTEComponent }  from './mte1.component';
import { ChartsModule } from './node_modules/ng2-charts/ng2-charts';

@NgModule({
  imports: [ChartsModule],
  declarations: [ MTEComponent ],
  bootstrap: [ MTEComponent ]
})
export class AppModule { }
