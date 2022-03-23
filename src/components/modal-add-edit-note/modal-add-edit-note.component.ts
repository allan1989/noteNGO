import { Component, OnInit } from '@angular/core';
import { selectNotes } from 'src/app/reducers/selectors/selectors';
import { addEditNoteModal } from 'src/app/reducers/selectors/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INote } from 'src/services/note.model';
import { showAddEditNoteModal } from 'src/app/reducers/actions/actions';

@Component({
  selector: 'app-modal-add-edit-note',
  templateUrl: './modal-add-edit-note.component.html',
  styleUrls: ['./modal-add-edit-note.component.scss']
})
export class ModalAddEditNoteComponent implements OnInit {

  public hasNotes$: Observable<INote[]>;
  public showAddEditNoteModal$: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
      this.hasNotes$ = this.store.pipe(select(selectNotes));
      this.showAddEditNoteModal$ = this.store.pipe(select(addEditNoteModal))
  }

  hideModal() {
      this.store.dispatch(showAddEditNoteModal(
        { showAddEditNoteModal: false}
        ))
  }

}
