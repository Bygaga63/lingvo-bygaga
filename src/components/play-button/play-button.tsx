import React from 'react';
import {IconButton, makeStyles, fade} from "@material-ui/core";
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import {useAudio} from "hooks/useAudio";

type Props = {
    soundUrl: string;
}

const useStyles = makeStyles(theme => ({
    playIcon: {
        height: 38,
        width: 38,
        color: fade(theme.palette.common.white, 0.75),
        '&:hover': {
            color: '#fff',
        },
    },
    playContainer: {
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.15),
        },
    }
}));


const PlayButton = ({soundUrl}: Props) => {
    const [playing, toggleAudio] = useAudio(soundUrl);
    const classes = useStyles();

    return (
        <>
            {soundUrl && <IconButton className={classes.playContainer} onClick={toggleAudio} aria-label="play/pause">
                {/*{playing ? <PauseCircleFilled className={classes.playIcon}/> :*/}
                {/*    <PlayArrowIcon className={classes.playIcon}/>}*/}
            </IconButton>
            }
        </>
    );
};

export default PlayButton;
