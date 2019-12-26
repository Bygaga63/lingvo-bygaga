import React from 'react';
import debounce from 'lodash.debounce';
import {fade, InputBase, makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {ChangeHandler} from "../../common/types";

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

type Props = {
    onChange: (text: string) => void;
    placeholder?: string
}



const SearchBar = ({onChange, placeholder}: Props) => {
    const classes = useStyles();
    const search = debounce(text => {
        onChange(text);
    }, 500);

    const onChangeHandler: ChangeHandler = e => {
        search(e.target.value)
    };

    return (
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder={placeholder}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={onChangeHandler}
                />
            </div>
        </div>

    );
};

export default React.memo(SearchBar);
