import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  state = {
    canUseLocalStorage: false,
    data : [] 
  }

  localStorage$ = new BehaviorSubject(this.state)

   obj = {
    propriete1 : "valeur21",
    propriete2 : "valeur21"
  };

  checkIfLocalStorageExists() {
    if(typeof localStorage !== 'undefined'){
      if(localStorage.getItem('notes') !== null && localStorage.getItem('notes')?.length) {
        this.localStorage$.next({...this.state, canUseLocalStorage: true})
      }
      if(localStorage.getItem('notes') === null) {
        localStorage.setItem('notes', JSON.stringify({}))
        this.localStorage$.next({...this.state, canUseLocalStorage: true})
      }
    }else {
      alert('localStorage is needed for this application to work')
    }
  }

  tata() {
    localStorage.setItem('notes', JSON.stringify(this.obj))
  }
}
