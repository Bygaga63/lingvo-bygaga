import React from 'react';
import {NextPage} from 'next';
import {makeStyles} from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import ShareIcon from '@material-ui/icons/Share';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MessageIcon from '@material-ui/icons/Message';
import StorageIcon from '@material-ui/icons/Storage';
import LanguageIcon from '@material-ui/icons/Language';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import {Layout} from "components";

const useStyles = makeStyles(theme => ({
    root: {},
}));

const MENU_OPTIONS = [
    {id: 1, name: 'Повторить выученные слова', icon: CachedIcon},
    {id: 2, name: 'Ночной режим', icon: BrightnessMediumIcon},
    {id: 3, name: 'Настройки', icon: SettingsInputAntennaIcon},
    {id: 4, name: 'Поделиться', icon: ShareIcon},
    {id: 5, name: 'Оцените приложение', icon: StarBorderIcon},
    {id: 6, name: 'Написать нам VK', icon: MessageIcon},
    {id: 7, name: 'О приложении', icon: StorageIcon},
    {id: 8, name: 'Друзие языки', icon: LanguageIcon},
    {id: 8, name: 'Создать резервную копию', icon: VerticalAlignBottomIcon},
    {id: 8, name: 'Востановить данные', icon: VerticalAlignTopIcon},
];

const Home: NextPage<{}> = ({}) => {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <List component="nav">
                    {MENU_OPTIONS.map(menu => (
                        <>
                            <ListItem button>
                                <ListItemIcon>
                                    <menu.icon/>
                                </ListItemIcon>
                                <ListItemText primary={menu.name}/>
                            </ListItem>
                            <Divider/>
                        </>
                    ))}
                </List>
            </div>
    )
};


Home.getInitialProps = async ({req}) => {

};

export default Home;
