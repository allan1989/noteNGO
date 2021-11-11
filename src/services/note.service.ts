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
    isModalRemoveItemOpen: false,
    currentNoteId: <number> 0
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

  // https://nevyan.blogspot.com/2019/11/store-state-management-with-rxjs.html

  // https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/

 // https://stackoverflow.com/questions/56574381/behaviorsubject-partial-change-does-not-trigger-subscription

 // https://stackoverflow.com/questions/41268671/rxjs-observe-an-object/41270535#41270535

  showModalRemoveItem(id:number) {
    console.log(this.state)
    const value = this.state.currentNoteId;
    this.state.currentNoteId = id;
    this.state.isModalRemoveItemOpen = true,


    this.localStorage$.next(
      this.state
     
    );
    console.log(this.state)
  }

  hideModalRemoveItem() {
    // console.log(this.state)
    this.localStorage$.next({
      ...this.state,
      isModalRemoveItemOpen: false
    })
  }
}
