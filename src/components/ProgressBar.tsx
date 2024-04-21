import {
    Typography,
    LinearProgress,
    Box,
} from '@mui/material';

type Props = {
    value: number,
}

export default function ProgressBar({value}: Props) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', width: '400px'}}>
            <Box sx={{width: '100%', mr: 1}}>
                <LinearProgress variant="determinate" value={value} />
            </Box>
            <Box sx={{minWidth: 35}}>
                <Typography variant="body2" color="text.secondary">
                    {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}
