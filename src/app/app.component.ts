import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { removeNoteModal } from './reducers/selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public showRemoveNoteModal$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.showRemoveNoteModal$ = this.store.pipe(select(removeNoteModal))
  }
} 
