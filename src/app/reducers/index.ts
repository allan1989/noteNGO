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
import { INote } from 'src/services/note.model';

export interface State {
  canUseLocalStorage: boolean,
  data: INote[],
  currentPriority: string
}

export const Initialstate: State = {
  currentPriority: 'haute',
  canUseLocalStorage: false,
  data: [
    {
      id: 1,
      title : "title 1",
      priority : "haute",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 2,
      title : "title 2",
      priority : "moyenne",
      body: 'Etiam rutrum accumsan odio, eget semper orci varius nec'
    },
    {
      id: 3,
      title : "title 3",
      priority : "basse",
      body: 'Nulla porta nec mauris quis rutrum'
    },
    {
      id: 4,
      title : "title 4",
      priority : "haute",
      body: 'Sed quis arcu ut erat posuere porttitor dignissim suscipit magna'
    },
    {
      id: 5,
      title : "title 5",
      priority : "moyenne",
      body: ' Suspendisse dignissim, quam non aliquet tincidunt, arcu ipsum ultricies felis, et eleifend velit eros sed mauris'
    },
    {
      id: 6,
      title : "title 6",
      priority : "basse",
      body: 'Ut sed vulputate ex, tempus laoreet augue'
    },
    {
      id: 7,
      title : "title 7",
      priority : "basse",
      body: 'Curabitur mattis aliquam diam quis lobortis'
    }
   ]
}

export const notesReducer = createReducer(
  Initialstate,
  on(actions.checkLocalStorageSuccess, (state, { canUseLocalStorage }) => ({ ...state, canUseLocalStorage  })),
  on(actions.filterNotesByPriority, (state, {currentPriority}) => ({
    ...state, currentPriority
  }))

)


