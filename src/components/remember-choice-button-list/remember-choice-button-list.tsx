import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import RememberChoiceButton from './remember-choice-button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Status} from "common/types";

type Props = {
    classNames?: string;
    status: Status;
}
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0 0.7rem',
    },
}));

const RememberChoiceButtonList: FC<Props> = ({classNames = '', status}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${classNames}`}>
            <RememberChoiceButton position={"right"} Icon={ChevronLeftIcon} status={status}/>
            <RememberChoiceButton position={'left'} Icon={ChevronRightIcon} status={status}/>
        </div>
    );
};

export default RememberChoiceButtonList;
