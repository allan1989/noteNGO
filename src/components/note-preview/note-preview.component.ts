import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/services/note.service';
import { INote  } from 'src/services/note.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService
    ) { }

  private sub: Subscription;
  public data: INote[] = [];
  public selected : number;

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.selected = params.id;
      this.data = this.noteService.localStorage$.value.data.filter(note => note.priority === params.id);
      this.loadData();
    });
  }

  handleSelectedNote(note:INote){
    this.selected = note.id
  }

  loadData() {
    // console.log(this.selected)
    // method to detele by id
    // https://newbedev.com/javascript-remove-object-from-array-javascript-by-id-code-example
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
