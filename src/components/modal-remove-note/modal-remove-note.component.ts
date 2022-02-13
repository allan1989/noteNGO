import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/services/note.service';
import { INote } from 'src/services/note.model';

@Component({
  selector: 'app-modal-remove-note',
  templateUrl: './modal-remove-note.component.html',
  styleUrls: ['./modal-remove-note.component.scss']
})
export class ModalRemoveNoteComponent implements OnInit {

  @Input() test: string;
  currentNote: INote[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

  }

  hideModalRemoveItem() {
    //this.noteService.hideModalRemoveItem()
  }

}
