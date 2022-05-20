import { HttpClient } from '@angular/common/http';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  viewEvent(userid: any) {
    throw new Error('Method not implemented.');
  }

  currentuser:any;
  currentacno:any;
  


  constructor(private http:HttpClient) { }

  login(acno: any, pswd: any) {


    const data={
      acno,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data)
  }

  register(acno: any, pswd: any, accntname: any) {
    const data={
      acno,
      pswd,
      accntname
    }
  return  this.http.post('http://localhost:3000/register',data)
  }

  addevent(acno:any,date:any,time:any,des:any,uid:any){
    const data={
      acno,
      date,
      time,
      des,
      uid
    }
  return  this.http.post('http://localhost:3000/dashboard',data)
  }

  events(acno:any){
    const data={
      acno
    }
    return  this.http.post('http://localhost:3000/eventform',data)
  }

  deleteEvent(toDeleteEventId: any) {
    return this.http.delete(
      'http://localhost:3000/deleteEvent/' + toDeleteEventId
    );
  }

  // updateform(date:any,des:any,uid:any)
  // {
  //   const data={
  //     date,
  //     des,
  //     uid
  //   }
  //   return this.http.put('http://localhost:3000/updateform/',data)
  // }

 
  updateevent(date:any,time:any,des:any,uid:any){
    const data={
      date,
      time,
      des,

    }
  return  this.http.post('http://localhost:3000/updateform/'+uid,data)
  }

  

  ondelete(acno:any)
  {
    return this.http.delete('http://localhost:3000/ondelete/'+acno)
  }


  

  deletedata(i:any){
    return this.http.delete('http://localhost:3000/deletedata/'+i)
  }


}
