import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { NotePreviewComponent } from 'src/components/note-preview/note-preview.component';
import { NoteFullComponent } from 'src/components/note-full/note-full.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotePreviewComponent,
    NoteFullComponent,
    NotFoundComponent
  ],
  imports: [RouterModule],
  exports: [HomeRoutingModule, HomeComponent]
})

export class HomeModule { }