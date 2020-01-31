import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.setTitle('Star Wars');
  }
  constructor(private titleService: Title) { }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
