import { createSelector, createFeatureSelector } from "@ngrx/store";
import { INote } from "src/services/note.model";
import { State } from "../index";

export const featureKey = 'notes';

export const selectNotesFeature = createFeatureSelector<State>(featureKey);
 
export const selectNotes = createSelector(
  selectNotesFeature,
  (state: State) => state.data // changer data à 'notes'
);
//https://timdeschryver.dev/blog/common-and-easy-to-make-mistakes-when-youre-new-to-ngrx#using-effects

// https://indepth.dev/posts/1456/a-journey-into-ngrx-selectors
