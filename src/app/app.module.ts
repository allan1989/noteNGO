import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeModule } from 'src/components/home/home.module';
import { ModalRemoveNoteComponent } from '../components/modal-remove-note/modal-remove-note.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { notesReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LocalStorageEffect } from './reducers/effects/effects';
import { Initialstate } from './reducers';
import { ModalAddEditNoteComponent } from '../components/modal-add-edit-note/modal-add-edit-note.component';

// save into localStorage
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state = Initialstate, action) {
    if(state.notes) {
      localStorage.setItem('notes', JSON.stringify(state.notes.data));
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalRemoveNoteComponent,
    ModalAddEditNoteComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    StoreModule.forRoot( {notes: notesReducer }, {metaReducers}),
    EffectsModule.forRoot([LocalStorageEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
