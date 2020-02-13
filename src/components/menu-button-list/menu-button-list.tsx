import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MenuButton from "./menu-button";
import SchoolIcon from '@material-ui/icons/School';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import {Routes} from "app/routes";
import Grid from '@material-ui/core/Grid';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

type Props = {
    route: Routes;
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: (props: Props) => {
            return (props.route === Routes.menu) ? theme.palette.background.paper : theme.palette.background.default
        } ,
    },
}));

const MenuButtonList: FC<Props> = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <MenuButton href={Routes.learn} label={'Учить'} Icon={SchoolIcon}/>
            <MenuButton href={Routes.category} label={'Категории'} Icon={FormatListBulletedIcon}/>
            <MenuButton href={Routes.statistic} label={'Статистика'} Icon={TimelineIcon}/>
            <MenuButton href={Routes.menu} label={'Меню'} Icon={SettingsIcon}/>
        </div>
    );
};

export default MenuButtonList;
