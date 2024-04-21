import {connect} from 'react-redux';
import {
    Stack,
    Typography,
} from '@mui/material';
import {selectors} from '../features/track/trackSlice';
import ProgressBar from './ProgressBar';
import PlayControls from './PlayControls';

import type {TrackSliceState} from '../features/track/trackSlice';

type Props = {
    trackMetadata: TrackSliceState,
};

const TrackControls = (props: Props) => {
    const {
        activeTrack,
        isPlaying,
        progress,
    } = props.trackMetadata;
    return (
        <Stack alignItems='center'>
            <Typography variant='subtitle1'>
                {activeTrack}
            </Typography>
            <PlayControls
                isPlaying={isPlaying}
                onPrevious={() => {}}
                onNext={() => {}}
                onResume={() => {}}
                onPause={() => {}}
                nextDisabled={true}
                previousDisabled={true}
            />
            <ProgressBar value={progress}/>
        </Stack>
    )
}

export default connect(mapStateToProps)(TrackControls);

// @ts-ignore
function mapStateToProps(state) {
    return {
        trackMetadata: selectors.selectTrackMetadata(state),
    };
}
