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

export const addToLocalStorage = createAction(
  '[ LOCALSTORAGE ] Add'
);

export const addToLocalStorageSucess = createAction(
  '[ LOCALSTORAGE ] Add Success'
);

export const removeNote = createAction(
  '[ NOTES ] Remove Note' 
);

export const removeNoteSuccess = createAction(
  '[ NOTES ] Remove Note Success' 
);

export const showRemoveNoteModal = createAction(
  '[ REMOVE NOTE MODAL ] Show Remove Note Modal',
  props<{ selectedNoteId: number, showRemoveNoteModal: boolean}>()
);

export const hideRemoveNoteModal = createAction(
  '[ REMOVE NOTE MODAL ] Hide Remove Note Modal',
  props<{ showRemoveNoteModal: boolean}>()
)
