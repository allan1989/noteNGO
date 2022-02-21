import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INote } from './note.model';
import { showRemoveNoteModal, hideRemoveNoteModal } from 'src/app/reducers/actions/actions';
import { select, Store } from '@ngrx/store';
import { State } from '../app/reducers/index'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private store: Store<State>
  ) { }

  canUseLocalStorage$: Observable<any>; 


  checkIfLocalStorageExists() {
    if(typeof localStorage !== 'undefined'){
      if(localStorage.getItem('notes') !== null && localStorage.getItem('notes')?.length) {
        const dataFromStorage = localStorage.getItem('notes');

        this.canUseLocalStorage$ = of({
          canUse: true
        });
        return this.canUseLocalStorage$;

      }
      if(localStorage.getItem('notes') === null) {
        localStorage.setItem('notes', JSON.stringify({}))
        
        this.canUseLocalStorage$ = of({
          canUse: true
        });
        return this.canUseLocalStorage$;
     
      }
    }
    return this.canUseLocalStorage$;
  }

  showDeleteNoteModal(id:number) {
    this.store.dispatch(showRemoveNoteModal({selectedNoteId: id, showRemoveNoteModal: true}))
  }
 
  hideDeleteNoteModal() {
    this.store.dispatch(hideRemoveNoteModal({ showRemoveNoteModal: false}));
  }

}
