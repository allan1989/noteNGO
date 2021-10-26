import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INote } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  state = {
    canUseLocalStorage: <boolean> false,
    data : <INote[]> [],
    count: { haute: 0, elevee: 0, moyenne: 0, basse: 0} 
  }

  localStorage$ = new BehaviorSubject(this.state)

   obj:INote[] = [
    {
      id: 1,
      title : "title 1",
      priority : "haute",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 2,
      title : "title 2",
      priority : "moyenne",
      body: 'Etiam rutrum accumsan odio, eget semper orci varius nec'
    },
    {
      id: 3,
      title : "title 3",
      priority : "basse",
      body: 'Nulla porta nec mauris quis rutrum'
    },
    {
      id: 4,
      title : "title 4",
      priority : "haute",
      body: 'Sed quis arcu ut erat posuere porttitor dignissim suscipit magna'
    },
    {
      id: 5,
      title : "title 5",
      priority : "moyenne",
      body: ' Suspendisse dignissim, quam non aliquet tincidunt, arcu ipsum ultricies felis, et eleifend velit eros sed mauris'
    },
    {
      id: 6,
      title : "title 6",
      priority : "basse",
      body: 'Ut sed vulputate ex, tempus laoreet augue'
    },
    {
      id: 7,
      title : "title 7",
      priority : "basse",
      body: 'Curabitur mattis aliquam diam quis lobortis'
    }
   ]

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

  loadFakeJSON() {
    this.localStorage$.next({...this.state, data: this.obj})
  }
}
