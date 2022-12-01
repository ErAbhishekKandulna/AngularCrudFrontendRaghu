import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = 'http://localhost:8080/v1/api/student';

  constructor(private http: HttpClient) { }

  //get all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/all`);
  }

  //create student
  createStudent(student: Student): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, student, {
      responseType: 'text',
    });
  }

  //delete student
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove/${id}`, {
      responseType: 'text'
    });
  }

  //get one student
  getOneStudent(id: number): Observable<Student>
  {
    return this.http.get<Student>(`${this.baseUrl}/find/${id}`);
  }

  //update student
  updateStudent(student: Student): Observable<any>
  {
    return this.http.put(`${this.baseUrl}/modify`,student,{
      responseType: 'text',
    });
  }
}
