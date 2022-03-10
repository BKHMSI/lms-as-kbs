import { Component, OnInit } from '@angular/core';
import { IPublication } from '../publication';
import * as papers from './papers.json';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

  list: { [key: string]: IPublication[]} = papers;

  constructor() { }

  ngOnInit(): void {
  }

}
