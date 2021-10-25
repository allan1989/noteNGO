import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private noteService: NoteService,
    public router: Router
    ) {}
  priorities = [
    {level: 'Haute', routeName: 'haute'},
    {level: 'Elevee', routeName: 'elevee'},
    {level: 'Moyenne', routeName: 'moyenne'},
    {level: 'Basse', routeName: 'basse'}
  ]

  ngOnInit(): void {
    this.noteService.checkIfLocalStorageExists();
    if(this.noteService.localStorage$.value.canUseLocalStorage) {
      this.noteService.tata();
    }
    console.log(this.noteService.calculateQuantity())
  }

}
