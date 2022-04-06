import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { NotePreviewComponent } from 'src/components/note-preview/note-preview.component';
import { NoteFullComponent } from 'src/components/note-full/note-full.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalAddEditNoteComponent } from '../modal-add-edit-note/modal-add-edit-note.component';
import { ToastComponent } from '../toast/toast.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NotePreviewComponent,
    NoteFullComponent,
    NotFoundComponent,
    ModalAddEditNoteComponent,
    ToastComponent
  ],
  imports: [RouterModule, BrowserModule, ReactiveFormsModule],
  exports: [HomeRoutingModule, HomeComponent, ModalAddEditNoteComponent]
})

export class HomeModule { }