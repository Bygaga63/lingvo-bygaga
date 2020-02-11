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
    link: {
        color: 'inherit',
    },
    icon: {
        display: 'block',
        margin: 'auto',
    }

}));

const MenuButton = ({label, href, Icon}: Props) => {
    const classes = useStyles();
    return (
            <Link href={href}>
                <a className={classes.link}>
                        <Icon className={classes.icon}/>
                        <Typography align={"center"} component={'p'} variant={"caption"}>
                            {label}
                        </Typography>
                </a>
            </Link>
    );
};

export default MenuButton;