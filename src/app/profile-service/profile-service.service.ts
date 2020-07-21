import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient) { }
     
   getUsers(user :string ){
         
        return this.http.get("https://api.github.com/search/users?q="+ user);

   }
  
    

}
