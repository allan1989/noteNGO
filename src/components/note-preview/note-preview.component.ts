import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/services/note.service';
import { INote  } from 'src/services/note.model';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../app/reducers/index'
import { filterNotesByPriority } from 'src/app/reducers/actions/actions';
import { selectNotes } from 'src/app/reducers/selectors/selectors';





@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  data$: Observable<INote[]>;
  public selected : number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private store: Store<State>
    ) { }


  
  ngOnInit(): void {


    this.sub = this.activatedRoute.params.subscribe(params => {
      this.selected = params.id;
      this.store.dispatch(filterNotesByPriority({currentPriority: params.id}))
    }); 

    this.data$ = this.store.pipe(select(selectNotes));
 
  }

  handleSelectedNote(note:INote){
    //this.selected = note.id
  }

  showModalRemoveItem(id:number) {
    //this.noteService.showModalRemoveItem(id);
  }



  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  // https://timdeschryver.dev/blog/parameterized-selectors#what-about-using-global-store-state

}
