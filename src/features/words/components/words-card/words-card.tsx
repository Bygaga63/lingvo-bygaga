import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {PartialMeaning, Word} from "api/skyengAPI";
import {PlayButton} from "components";
import {WordCardMeanings} from "features/words/components";

type Props = Word;

const useStyles = makeStyles({
    title: {
        marginRight: 20,
        '&::first-letter': {
            textTransform: 'uppercase',
        },
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'
    }
});

const getSoundUrl = (meanings: PartialMeaning[]) => {
    const meaningWithAudio = meanings.find(meaning => !!meaning.soundUrl);
    return meaningWithAudio ? meaningWithAudio.soundUrl : '';
};

const WordsCard = ({text, meanings}: Props) => {
    const soundUrl = getSoundUrl(meanings);
    const classes = useStyles();

    return (<>
        <div className={classes.headerContainer}>
            <Typography className={classes.title} variant="h2" align="center">{text}</Typography>
            {soundUrl && <PlayButton soundUrl={soundUrl}/>}
        </div>
        <WordCardMeanings data={meanings}/>
    </>)
};

export default WordsCard;
