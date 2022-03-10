import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect  } from "@ngrx/effects";
import { catchError, mergeMap, map } from 'rxjs/operators'
import { checkLocalStorage, checkLocalStorageSuccess } from '../actions/actions';
import { NoteService } from "src/services/note.service";
import { EmptyError } from "rxjs";

@Injectable()
export class LocalStorageEffect {

  constructor(
    private actions$ : Actions,
    private noteService: NoteService
  ){}

  localStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(checkLocalStorage),
      mergeMap(() => this.noteService.checkIfLocalStorageExists()
      .pipe(
        map((response) => checkLocalStorageSuccess({canUseLocalStorage: response.canUse, data: response.notes}))
      ))
    )
  )


  // https://stackoverflow.com/questions/62543201/ngrx-and-localstorage-in-combination

}