import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public isModalRemoveItemOpen: boolean;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    /*
    this.noteService.subject$.subscribe(
      params => this.isModalRemoveItemOpen = params.isModalRemoveItemOpen
    )
    */
  }
} 
