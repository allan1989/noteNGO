import { createSelector, createFeatureSelector, StateObservable } from "@ngrx/store";
import { INote } from "src/services/note.model";
import { State } from "../index";

export const featureKey = 'notes';

export const selectNotesFeature = createFeatureSelector<State>(featureKey);
 
export const selectNotes = createSelector(
  selectNotesFeature,
  (state: State) => state.notes 
);

export const removeNoteModal = createSelector(
  selectNotesFeature,
  (state: State) => state.showRemoveNoteModal
);

export const selectedNoteId = createSelector(
  selectNotesFeature,
  (state: State) => state.selectedNoteId
)

export const selectNotesByPriority = (priority: string) => 
  createSelector(
    selectNotes,
    (notes) => notes.filter(note => note.priority === priority)
  )

// id comes from route parameters
export const selectSingleNote = (id: number) => 
  createSelector(
    selectNotes,
    (notes) => notes.filter(note => note.id === id)
  )

// id comes from global state
export const selectSingleNoteForModal = createSelector(
  selectNotes,
  selectedNoteId,
  (notes: INote[], selectedNoteId: number) => {
    if(notes && selectedNoteId) {
      return notes.filter((note: INote) => note.id === selectedNoteId)
    }else {
      return notes
    }
  }


)




//https://timdeschryver.dev/blog/common-and-easy-to-make-mistakes-when-youre-new-to-ngrx#using-effects

// https://indepth.dev/posts/1456/a-journey-into-ngrx-selectors
