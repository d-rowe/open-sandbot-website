import {
    List,
    ListItemText,
    ListItemButton,
    ListItem,
    IconButton,
} from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {connect} from 'react-redux';
import {selectors} from '../features/track/trackSlice';

type Props = {
    onSelect: (trackId: string) => void,
};

type PropsFromState = {
    tracks: string[],
};

const TrackList = (props: Props & PropsFromState) => {
    return (
        <List disablePadding>
            {props.tracks.map(track => (
                <ListItem
                    disableGutters
                    disablePadding
                    divider
                >
                    <ListItemButton
                        key={track}
                        onClick={() => props.onSelect(track)}
                        disableRipple
                    >
                        <ListItemText primary={track} />
                    </ListItemButton>
                    <IconButton>
                        <PlaylistAddIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    )
}

export default connect(mapStateToProps)(TrackList);

// @ts-ignore
function mapStateToProps(state) {
    const {tracks} = selectors.selectTrackMetadata(state);
    return {tracks};
}
