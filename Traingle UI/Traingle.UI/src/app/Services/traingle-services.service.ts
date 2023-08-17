import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Traingle } from '../Model/Traingle';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TraingleServicesService {
  
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }


  GetAllTraingles():Observable<Traingle[]>{
    return  this.http.get<Traingle[]>(this.baseApiUrl + 'api/Traingle/' );
  }

  AddTraingle(addTraingleDetails: Traingle):Observable<Traingle>{
    addTraingleDetails.id = '00000000-0000-0000-0000-000000000000';
   return  this.http.post<Traingle>(this.baseApiUrl + 'api/Traingle/', addTraingleDetails);

  }

  GetTraingle(id: string):Observable<Traingle>{
    return this.http.get<Traingle>(this.baseApiUrl + 'api/Traingle/' + id );
  }

  UpdateTraingle(id: string , updateTraingleRequest: Traingle):Observable<Traingle>{
    console.log(updateTraingleRequest)
    return this.http.put<Traingle>(this.baseApiUrl+ 'api/Traingle/' + id , updateTraingleRequest);
  }

  DeleteTraingle(id: string):Observable<Traingle>{
    return this.http.delete<Traingle>(this.baseApiUrl + 'api/Traingle/' + id);
  }

}
