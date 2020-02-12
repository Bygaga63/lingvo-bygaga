import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardContent, RememberChoiceButtonList} from 'components';
import {Status} from "common/types";
import Typography from '@material-ui/core/Typography';



const STATUS_COLOR = {
    [Status.new]: '#fff',
    [Status.firstRepeat]: '#8bc34a',
    [Status.secondRepeat]: '#ffee58',
    [Status.thirdRepeat]: '#ffa726',
    [Status.fourthRepeat]: '#29b6f6',
    [Status.fifthRepeat]: '#e57373',
    [Status.learning]: '#3f51b5',
    [Status.learned]: '#7e57c2',
};

const STATUS_LABEL = {
    [Status.new]: 'Новое слово',
    [Status.firstRepeat]: '1й повтор слова',
    [Status.secondRepeat]: '2й повтор слова',
    [Status.thirdRepeat]: '3й повтор слова',
    [Status.fourthRepeat]: '4й повтор слова',
    [Status.fifthRepeat]: '5й повтор слова',
    [Status.learning]: 'в процессе изучения',
    [Status.learned]: 'выученное слово',
};

type Props = {
    status: Status;
    classNames?: string;
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    statusShape: {
        padding: '0.5rem',
        background: (props: Props) => STATUS_COLOR[props.status],
        borderRadius: '0.2rem',
        marginRight: '0.7rem',
    },
    label: {
      fontWeight: 300,
    }

}));

const WordRepeatStatus: FC<Props> = (props) => {
    const classes = useStyles(props);

    return (
        <div className={`${classes.root} ${props.classNames}`}>
            <div className={classes.statusShape}/>
            <Typography className={classes.label} component='p' variant="caption">{STATUS_LABEL[props.status]}</Typography>
        </div>
    );
};

WordRepeatStatus.defaultProps = {
    classNames: '',
};

export default WordRepeatStatus;
