import React from 'react';
import {Grid} from "@material-ui/core";
import {PartialMeaning} from "api/skyengAPI";
import {WordCardMeaningItem} from "features/words/components/index";
import Router from 'next/router'

type Props = {
    data: PartialMeaning[];
};

const WordsCardMeanings = ({data}: Props) => {
    const onMoveClick = (id: string): void => {
        Router.push('/wordMeaning/' + id);
    };

    return (
        <Grid container>
            {
                data.map(({translation, id, imageUrl}) => <WordCardMeaningItem
                    id={id} onMoveClick={onMoveClick}
                    key={id}
                    text={translation.text}
                    imageUrl={imageUrl}
                />)}
        </Grid>)
};

export default WordsCardMeanings;
