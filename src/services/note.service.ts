import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { showRemoveNoteModal, hideRemoveNoteModal, removeNote } from 'src/app/reducers/actions/actions';
import { Store } from '@ngrx/store';
import { State } from '../app/reducers/index';
import { showAddEditNoteModal } from 'src/app/reducers/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private store: Store<State>
  ) { }

  canUseLocalStorage$: Observable<any>; 


  checkIfLocalStorageExists() {
    const dataFromStorage = localStorage.getItem('notes');
    if(typeof localStorage !== 'undefined'){
      if(localStorage.getItem('notes') !== null && localStorage.getItem('notes')?.length) {

        this.canUseLocalStorage$ = of({
          canUse: true,
          notes: [
          {
            id: 8,
            title : "title 8",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          },
          {
            id: 9,
            title : "title 9",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          }]
        });
        return this.canUseLocalStorage$;

      }
      if(localStorage.getItem('notes') === null) {
        localStorage.setItem('notes', JSON.stringify({}))
        
        this.canUseLocalStorage$ = of({
          canUse: true,
          notes: [
          {
            id: 8,
            title : "title 8",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          },
          {
            id: 9,
            title : "title 9",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          }]
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

  deleteNote(id:number) {
    this.store.dispatch(removeNote({selectedNoteId: id}));
    this.hideDeleteNoteModal();
  }

  showAddEditModalForUpdating() {
    this.store.dispatch(showAddEditNoteModal({
      showAddEditNoteModal: true,
      isAddMode: false
    }))
  }

  showAddEditModalForCreating() {
    this.store.dispatch(showAddEditNoteModal({
      showAddEditNoteModal: true,
      isAddMode: true
    }))
  }

}
