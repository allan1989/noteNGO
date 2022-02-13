import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { checkLocalStorage } from 'src/app/reducers/actions/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private noteService: NoteService,
    public router: Router,
    private store: Store
    ) {}
  priorities = [
    {level: 'Haute', routeName: 'haute'},
    {level: 'Elevee', routeName: 'elevee'},
    {level: 'Moyenne', routeName: 'moyenne'},
    {level: 'Basse', routeName: 'basse'}
  ]

  ngOnInit(): void {
    
    this.store.dispatch(checkLocalStorage())

    this.noteService.checkIfLocalStorageExists();
    /*
    if(this.noteService.getState().canUseLocalStorage) {
      this.noteService.loadFakeJSON();
    }
    */
  }

}
