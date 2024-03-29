import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Member } from '../model/Member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<Array<Member>> {
    return this.http.get<Array<Member>>("http://localhost:8080/members");
  }

  public saveMember(member: Member): Observable<Member> {
    return this.http.post<Member>("http://localhost:8080/members", member);
  }

  public deleteMember(id: number) {
    return this.http.delete("http://localhost:8080/members/" + id);
  }

  public updateMember(id: number, member: Member): Observable<Member> {
    return this.http.put<Member>("http://localhost:8080/members/" + id, member);
  }

  public getMemberById(id: number): Observable<Member> {
    return this.http.get<Member>("http://localhost:8080/members/" + id);
  }

  public getMembersByFormationId(formationId: number): Observable<Array<Member>> {
    return this.http.get<Array<Member>>("http://localhost:8080/formations/membersByFormation/" + formationId);
  }
  public searchMember(keyword:string):Observable<Array<Member>>{
    return this.http.get<Array<Member>>("http://localhost:8080/members/search?keyword="+keyword)
  }

}
