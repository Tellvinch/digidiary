import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-do-detail',
  templateUrl: './do-detail.component.html',
  styleUrls: ['./do-detail.component.css']
})
export class DoDetailComponent implements OnInit {

  @Input() do: Diary;
  @Output() isDone = new EventEmitter<boolean>();

  doDelete(done:boolean){
    this.isDone.emit(done);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
