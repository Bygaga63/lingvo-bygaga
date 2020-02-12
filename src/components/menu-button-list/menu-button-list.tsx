import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MenuButton from "./menu-button";
import SchoolIcon from '@material-ui/icons/School';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import {Routes} from "app/routes";
import Grid from '@material-ui/core/Grid';

type Props = {}
const useStyles = makeStyles(theme => ({
    root: {
        padding: '0 1vw',
    },
}));

const MenuButtonList = ({}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify={"space-between"} wrap={"nowrap"}>
                <Grid item ><MenuButton href={Routes.learn} label={'Учить'} Icon={SchoolIcon}/></Grid>
                <Grid item ><MenuButton href={Routes.category} label={'Категории'}
                                                     Icon={FormatListBulletedIcon}/></Grid>
                <Grid item ><MenuButton href={Routes.statistic} label={'Статистика'} Icon={TimelineIcon}/></Grid>
                <Grid item ><MenuButton href={Routes.menu} label={'Меню'} Icon={SettingsIcon}/></Grid>
            </Grid>
        </div>
    );
};

export default MenuButtonList;
