import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeModule } from 'src/components/home/home.module';
import { ModalRemoveNoteComponent } from '../components/modal-remove-note/modal-remove-note.component';
import { StoreModule } from '@ngrx/store';
import { notesReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LocalStorageEffect } from './reducers/effects/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalRemoveNoteComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    StoreModule.forRoot( {notes: notesReducer }),
    EffectsModule.forRoot([LocalStorageEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
