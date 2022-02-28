import { Component, OnInit } from '@angular/core';
import {  faEdit, faEye, faGrip, faList, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {

  avtar = faUserTie;
  view = faEye;
  edit = faEdit;
  del = faTrash;
  list = faList;
  grid = faGrip;

  constructor() { }

  ngOnInit(): void {
  }
 

}
