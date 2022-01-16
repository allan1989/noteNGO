import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as actions from '../reducers/actions/actions';

export interface State {
  canUseLocalStorage: boolean,
  data: any
}

export const Initialstate: State = {
  canUseLocalStorage: false,
  data: []
}

export const notesReducer = createReducer(
  Initialstate,
  on(actions.checkLocalStorageSuccess, (state, { canUseLocalStorage, data }) => ({ ...state, canUseLocalStorage, data  }))
)


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
