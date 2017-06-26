import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username ='vlori2k';
    private client_id = 'efc13412f17ddd89803c';
    private client_secret = '4bea3ee8ec7d90aa637774ab31f8474a9e20d530';

constructor(private _http:Http){

    console.log('Github Service init..')

   }

   getUser(){
    return this._http.get('https://api.github.com/users/' +this.username)
          .map(res => res.json());

   }

    getRepos(){
    return this._http.get('https://api.github.com/users/' +this.username+ '/repos')
          .map(res => res.json());

   }
   updateUsername(username:string){
        this.username = username;
   }

}