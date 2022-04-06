import { Component, OnInit } from '@angular/core';
import { selectNotes } from 'src/app/reducers/selectors/selectors';
import { addEditNoteModal, AddEditNoteModalMode } from 'src/app/reducers/selectors/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INote } from 'src/services/note.model';
import { showAddEditNoteModal } from 'src/app/reducers/actions/actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-modal-add-edit-note',
  templateUrl: './modal-add-edit-note.component.html',
  styleUrls: ['./modal-add-edit-note.component.scss']
})
export class ModalAddEditNoteComponent implements OnInit {

  public hasNotes$: Observable<INote[]>;
  public showAddEditNoteModal$: Observable<boolean>;
  public isAddMode$: Observable<boolean>;

  public noteForm!: FormGroup;
  public submitted: boolean = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
      this.hasNotes$ = this.store.pipe(select(selectNotes));
      this.showAddEditNoteModal$ = this.store.pipe(select(addEditNoteModal));
      this.isAddMode$ = this.store.pipe(select(AddEditNoteModalMode));

      this.noteForm = this.formBuilder.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        body: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        priority: ['', [Validators.required]]
      })
  }

  hideModal() {
      this.store.dispatch(showAddEditNoteModal(
        { 
          showAddEditNoteModal: false,
          isAddMode: true
        }
        ))
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.noteForm)
    if(this.noteForm.invalid) {
      return;
    }else {
      let id = uuidv4();
      this.noteForm.value.id = id;
      console.log(this.noteForm.status, this.noteForm.value);
      this.noteService.addNote(this.noteForm.value);
      this.noteForm.reset();
    }

    
  }

  // https://jasonwatmore.com/post/2020/09/02/angular-combined-add-edit-create-update-form-example

}
