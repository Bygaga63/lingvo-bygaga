import {NextPage} from 'next';
import SearchBar from 'components/search-bar/search-bar';
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchWords} from "features/words/wordsSlice";
import {RootState} from "app/rootReducer";
import {Word} from "api/skyengAPI";
import {WordCard} from "features/words/components";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    searchBar: {
        paddingTop: '3vh',
    }
}));

const Search: NextPage<{}> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const onChange = (text: string) => {
        dispatch(fetchWords(text));
    };
    const {isLoading, data, error} = useSelector((state: RootState) => state.words);

    return (
        <>
            <SearchBar wrapperClassName={classes.searchBar} onChange={onChange}/>
            {data.map((word: Word) =>
                <WordCard key={word.id} {...word}/>
            )}

        </>
    );
};


Search.getInitialProps = async ({req}) => {
    return {};
};

export default Search;
