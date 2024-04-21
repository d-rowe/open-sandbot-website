import {
    IconButton,
    Stack,
} from '@mui/material';
import {
    PauseCircle,
    PlayCircle,
    SkipPrevious,
    SkipNext,
} from '@mui/icons-material';

type Props = {
    isPlaying: boolean,
    onPause: () => void,
    onResume: () => void,
    onNext: () => void,
    onPrevious: () => void,
    nextDisabled?: boolean,
    previousDisabled?: boolean,
};

export default function PlayControls(props: Props) {
    const {
        isPlaying,
        onPause,
        onResume,
        onPrevious,
        onNext,
        previousDisabled,
        nextDisabled,
    } = props;
    return (
        <Stack direction='row'>
            <IconButton
                onClick={onPrevious}
                disabled={previousDisabled}
            >
                <SkipPrevious/>
            </IconButton>
            <IconButton>
                {isPlaying ? (
                    <PauseCircle
                        fontSize='large'
                        onClick={onPause}
                    />
                ) : (
                    <PlayCircle
                        fontSize='large'
                        onClick={onResume}
                    />
                )}
            </IconButton>
            <IconButton
                onClick={onNext}
                disabled={nextDisabled}
            >
                <SkipNext />
            </IconButton>
        </Stack>
    );
}
