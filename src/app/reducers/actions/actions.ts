import { createAction, props } from "@ngrx/store";

export const checkLocalStorage = createAction(
  '[ LOCALSTORAGE ] Check'
);

export const checkLocalStorageSuccess = createAction(
  '[ LOCALSTORAGE ] Success',
  props<{ canUseLocalStorage: boolean, data: any}>()
);

export const checkLocalStorageError = createAction(
  '[ LOCALSTORAGE ] Error'
);

export const filterNotesByPriority = createAction(
  '[ NOTES ] Filter by priority',
  props<{ currentPriority: string}>()
);