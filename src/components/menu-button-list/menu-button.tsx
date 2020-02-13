import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Link from "next/link";
import {Icon} from "@material-ui/core";

type Props = {
    label: string;
    href: string;
    Icon: any;
}


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',

    },
    link: {
        color: 'inherit',
    },
    icon: {
        display: 'inline-block',
    }

}));

const MenuButton = ({label, href, Icon}: Props) => {
    const classes = useStyles();
    return (
        <Link href={href}>
            <div className={classes.root}>
                <a className={classes.link}>
                    <Icon className={classes.icon}/>
                    <Typography component={'p'} variant={"caption"}>
                        {label}
                    </Typography>
                </a>
            </div>

        </Link>
    );
};

export default MenuButton;
