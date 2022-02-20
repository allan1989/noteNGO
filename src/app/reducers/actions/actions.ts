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
