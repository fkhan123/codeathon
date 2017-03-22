
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
export class CM {
  constructor(public id: number, public name: string, public env: string,public version: int) { }
  //constructor(private http:Http){}
}

@Injectable()
export class CMService {
	
  constructor(private _http:Http){}
  getCMsfromservice()
  {console.log('inside it');
	  return this._http.get('http://localhost:8088/api').map(res => res.json());
  }
  getCMs() { return cmsPromise; }

  getCM(id: number | string) {
    return cmsPromise
      .then(cms => cms.filter(c => c.id === +id)[0]);
  }


  static nextCMId = 100;

  addCM(name:string) {
    name = name.trim();
    if (name){
      let cm = new CM(CMService.nextCMId++, name, env);
      cmPromise.then(cm => cm.push(cm));
    }
  }
}

var cms = [
  new CM(1, 'SYSTEM','DEV',1.0),
  new CM(2, 'CONFIG','UQA',1.1),
  new CM(3, 'APPLICATION','PROD',2.5),
  new CM(4, 'DATABASE','UINT',3.6)
];

var cmsPromise = Promise.resolve(cms);
