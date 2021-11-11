import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeModule } from 'src/components/home/home.module';
import { ModalRemoveNoteComponent } from '../components/modal-remove-note/modal-remove-note.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalRemoveNoteComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
