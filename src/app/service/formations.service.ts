import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Formation} from "../model/Formation";
import { Observable } from 'rxjs';
import { Member } from '../model/Member';


@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http:HttpClient) { }
  public getFormations():Observable<Array<Formation>>{
    return this.http.get<Array<Formation>>("http://localhost:8080/formations")
  }
  public saveFormation( formation:Formation):Observable<Formation>{
    return this.http.post<Formation>("http://localhost:8080/formations",formation)
  }
  public deleteFormation(id:number){
    return this.http.delete("http://localhost:8080/formations/"+id);
  }
  public updateFormation(id:number,formation:Formation):Observable<Formation>{
    return this.http.put<Formation>("http://localhost:8080/formations/"+id,formation)
  }
  public searchFormation(keyword:string):Observable<Array<Formation>>{
    return this.http.get<Array<Formation>>("http://localhost:8080/formations/search?keyword="+keyword)
  }
  public getFormationById(id:number):Observable<Formation>{
    return this.http.get<Formation>("http://localhost:8080/formations/"+id)
  }
  public getFormationsByMemberId(memberId: number): Observable<Array<Formation>> {
    return this.http.get<Array<Formation>>("http://localhost:8080/members/formationsByMember/" + memberId);
  }
  public assignMemberToFormation(formationId: number, member: Member): Observable<Formation> {
    return this.http.put<Formation>("http://localhost:8080/formations/" + formationId + "/members", member);
  }
  
  public getMembersByFormationId(formationId: number): Observable<Array<Member>> {
    return this.http.get<Array<Member>>("http://localhost:8080/formations/membersByFormation/" + formationId);
  }
  removeMemberFromFormation(formationId: number, memberId: number): Observable<any> {
    return this.http.delete("http://localhost:8080/formations/"+formationId+"/members/"+memberId);
  }

}
