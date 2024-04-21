import {get, post} from './ClientUtils';

type StartTrackRequest = {
    track: string,
};

export async function getTracks(): Promise<string[]> {
    return get<string[]>('tracks');
}

export async function startTrack(track: string): Promise<void> {
    await post<StartTrackRequest>('tracks/start', {track});
}

export async function pauseTrack(): Promise<void> {
    await post('track/pause');
}

export async function resumeTrack(): Promise<void> {
    await post('track/resume');
}
