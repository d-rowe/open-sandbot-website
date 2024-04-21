import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

export interface TrackSliceState {
  isLoading: boolean,
  isPlaying: boolean,
  progress: number,
  tracks: string[],
  activeTrack: string | null,
  queueIndex: number,
  queue: string[],
}

const initialState: TrackSliceState = {
  isLoading: true,
  isPlaying: false,
  progress: 0,
  tracks: [],
  activeTrack: null,
  queueIndex: 0,
  queue: [],
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const trackSlice = createSlice({
  name: 'track',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    updateTracks: create.reducer(
      (state, action: PayloadAction<string[]>) => {
        state.tracks = action.payload;
      },
    ),
    setPlaying: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.isPlaying = action.payload;
      },
    ),
    setActiveTrack: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.activeTrack = action.payload;
      },
    ),
    addToQueue: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.queue.push(action.payload);
      },
    ),
    nextTrack: create.reducer(state => {
        state.queueIndex += 1;
      },
    ),
    previousTrack: create.reducer(state => {
        state.queueIndex -= 1;
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectTrackMetadata: state => state,
  },
})

// Action creators are generated for each case reducer function.
export const {actions, selectors} = trackSlice;
