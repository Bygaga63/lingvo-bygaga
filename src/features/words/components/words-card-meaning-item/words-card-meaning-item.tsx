import React, {MouseEvent} from 'react';
import {Card, CardContent, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";

type Props = {
    id: string;
    text: string;
    imageUrl: string;
    onMoveClick: (id: string) => void;
};

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 140,
    },
    text: {
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
});
const WordsCardMeaningItem = ({id, text, imageUrl, onMoveClick}: Props) => {
    const classes = useStyles();
    const onClick = (e: MouseEvent<HTMLDivElement>) => onMoveClick(id);
    return (
        <Grid item xs={12} md={4}>
            <div onClick={onClick}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title={text}
                    />
                    <CardContent>
                        <Typography align={"center"} className={classes.text} noWrap color={"secondary"} gutterBottom
                                    variant="h5" component="h2">
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Grid>
    );
};

export default WordsCardMeaningItem;
