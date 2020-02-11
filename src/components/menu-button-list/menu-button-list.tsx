import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MenuButton from "./menu-button";
import SchoolIcon from '@material-ui/icons/School';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import {Routes} from "../../app/routes";

type Props = {}
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

const MenuButtonList = ({}: Props) => {
    const classes = useStyles();
    return (<div className={classes.root}>
            <MenuButton href={Routes.learn} label={'Учить'} Icon={SchoolIcon}/>
            <MenuButton href={Routes.category} label={'Категории'} Icon={FormatListBulletedIcon}/>
            <MenuButton href={Routes.statistic} label={'Статистика'} Icon={TimelineIcon}/>
            <MenuButton href={Routes.menu} label={'Меню'} Icon={SettingsIcon}/>
        </div>
    );
};

export default MenuButtonList;