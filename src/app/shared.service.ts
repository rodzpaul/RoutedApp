import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  shStudentCollection: Array<object> = [];
  studObj: {studnum: number, firstname: string, lastname: string, prog: string, year:number};

  constructor() { }

  addNewStudent(sNumber: number, sFirstName: string, sLastName: string, sProg: string, sYear:number){
    this.studObj = {
      studnum: sNumber,
      firstname: sFirstName,
      lastname: sLastName,
      prog: sProg,
      year: sYear
    }
    this.shStudentCollection.push(this.studObj);
  }

  getStudent(){
    return this.shStudentCollection;
  }
}