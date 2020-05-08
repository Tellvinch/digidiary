import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
dos:Diary[]=[
      new Diary(1,'Finish the diary project','Must be completed before i start on ip',new Date(2020,5,8)),
      new Diary(2,'Start on todays project','Must be completed before end of day',new Date(2020,5,8)),
      new Diary(3,'Take lunch ','A heavy meal ofcourse',new Date(2020,5,8)),
      new Diary(4,'Watch a movie','Olympus has fallen',new Date(2020,5,8)),
      new Diary(5,'Take a long refreshening nap','Say sorry to my body',new Date(2020,5,8)),
    ]
    addNewDiary(goal){
      let goalLength = this.dos.length;
      goal.id = goalLength+1;
      goal.completeDate = new Date(goal.completeDate)
      this.dos.push(goal)
    }

  
    toggleDetails(index){
      this.dos[index].showDescription = !this.dos[index].showDescription;
    }
    deleteDo(isDone, index){
      if (isDone) {
        let toDelete = confirm(`Are you sure you want to delete ${this.dos[index].name}?`)
        if (toDelete){
        this.dos.splice(index,1);
        }
      }
    }
    constructor(){}

  ngOnInit(): void {
  }

}
