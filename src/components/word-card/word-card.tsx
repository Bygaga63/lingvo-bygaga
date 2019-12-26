import React from 'react';
import {Card, CardContent, CardMedia, IconButton, makeStyles, Typography} from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import {PartialMeaning, Word} from "../../api/skyengAPI";
import {useAudio} from "../../hooks/useAudio";

type Props = Word;

const useStyles = makeStyles({
    title: {
        '&::first-letter': {
            textTransform: 'uppercase',
        },
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

const getSoundUrl = (meanings: PartialMeaning[]) => {
    const meaningWithAudio = meanings.find(meaning => !!meaning.soundUrl);
    return meaningWithAudio ? meaningWithAudio.soundUrl : '';
};

const WordCard = ({text, meanings}: Props) => {
    const soundUrl = getSoundUrl(meanings);
    const classes = useStyles();
    const [playing, toggleAudio] = useAudio(soundUrl);

    return (<div>
        <Typography className={classes.title} variant="h2" align={"center"}>{text}</Typography>

        {meanings.map(({translation, id, imageUrl}) =>
            <Card key={id} className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={translation.text}
                />
                <CardContent>
                    <Typography color={"secondary"} gutterBottom variant="h5" component="h2">
                        {translation.text}
                    </Typography>
                </CardContent>
            </Card>
        )}

        {soundUrl && <IconButton onClick={toggleAudio} aria-label="play/pause">
            {playing ? <PauseCircleFilled className={classes.playIcon}/> :
                <PlayArrowIcon className={classes.playIcon}/>}
        </IconButton>}

    </div>)
};

export default WordCard;
