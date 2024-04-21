import {store} from '../../app/store';
import * as TrackClient from '../../clients/TrackClient';
import {actions} from './trackSlice';

export async function loadTracks(): Promise<void> {
    const tracks = await TrackClient.getTracks();
    store.dispatch(actions.updateTracks(tracks));
}

export async function startTrack(track: string): Promise<void> {
    store.dispatch(actions.setActiveTrack(track));
    await TrackClient.startTrack(track);
    store.dispatch(actions.setPlaying(true));
}

export async function pauseTrack(): Promise<void> {
    store.dispatch(actions.setPlaying(false));
    // todo send pause request
}

export async function resumeTrack(): Promise<void> {
    store.dispatch(actions.setPlaying(true));
    // todo send resume request
}
