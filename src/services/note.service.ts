import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface INote {
  title: string,
  priority: string,
  date: string,
  body: string
}

interface ICount {
  [key: string]: any
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  enum = {
    HAUTE: 'Haute',
    ELEVEE: 'Elevée',
    MOYENNE: 'Moyenne',
    BASSE: 'Basse'
  }

  count: any[] = []

  state = {
    canUseLocalStorage: <boolean> false,
    data : <INote[]> [],
    count: { haute: 0, elevee: 0, moyenne: 0, basse: 0} 
  }

  localStorage$ = new BehaviorSubject(this.state)

   obj:INote[] = [
    {
      title : "title 1",
      priority : "haute",
      date: '2007/02/30',
      body: 'lorem lorem lorem'
    },
    {
      title : "title 2",
      priority : "moyenne",
      date: '2004/02/30',
      body: 'lorem zeze imspum'
    },
    {
      title : "title 3",
      priority : "basse",
      date: '2007/09/30',
      body: 'lorem color imspum'
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

  calculateQuantity() {
    this.obj.forEach(el => {
       //this.count[el.priority] = (this.count[el.priority] || 0) + 1
 

    });
    return this.state.count;

  }

  tata() {
    localStorage.setItem('notes', JSON.stringify(this.obj))
  }
}
