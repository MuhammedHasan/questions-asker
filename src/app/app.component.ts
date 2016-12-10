import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions = [
    {
      "q": "asdasd asd assd",
      "a": "asdasd asd asd",
      "b": "asdasd asd asd",
      "c": "asdasd asd asd",
      "d": "asdasd asd asd",
      "ans": "a"
    },
    {
      "q": "asdasda asd asd sd asd asd",
      "a": "asdasd adasd asd",
      "b": "asdaghgsd asd asd",
      "c": "asdasdfgh  asd asd",
      "d": "asdasd asd asd",
      "ans": "b"

    },
    {
      "q": "asdasd asdasdsasdad asd gghjhg jtyasd asd",
      "a": "asdafgh fghsd asd asd",
      "b": "asdafsd asd asd",
      "c": "asdasd s asd",
      "d": "x asd c",
      "ans": "c"
    }
  ];

  index = 0;
  show = false;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/questions.json')
      .map(response => response.json())
      .subscribe(data => {
        this.questions;
      });
  }

  next() {
    this.show = false;
    if (this.index < this.questions.length - 1)
      this.index++;
  }

  showAnswer() {
    this.show = true;
  }

  previous() {
    this.show = false;
    if (this.index > 0)
      this.index--;
  }
}
