import { Component } from '@angular/core';
import { Diary } from './diary'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diary';
  dos:Diary[]=[
    new Diary(1,'Finish the diary project','Must be completed before i start on ip',new Date(2020,5,8)),
    new Diary(2,'Start on todays project','Must be completed before end of day',new Date(2020,5,8)),
    new Diary(3,'Take lunch ','A heavy meal ofcourse',new Date(2020,5,8)),
    new Diary(4,'Watch a movie','Olympus has fallen',new Date(2020,5,8)),
    new Diary(5,'Take a long refreshening nap','Say sorry to my body',new Date(2020,5,8)),
  ]

}
