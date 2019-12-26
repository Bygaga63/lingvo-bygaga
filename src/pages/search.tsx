import {NextPage} from 'next';
import SearchBar from 'components/search-bar/search-bar';
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchWords} from "features/wordsList/wordsSlice";
import {WordCard, WordCardWrapper} from "components";
import {RootState} from "app/rootReducer";
import {Word} from "api/skyengAPI";

const Search: NextPage<{}> = () => {
    const dispatch = useDispatch();
    const onChange = (text: string) => {
        dispatch(fetchWords(text));
    };
    const {isLoading, data, error} = useSelector((state: RootState) => state.words);

    return (
        <>
            <SearchBar onChange={onChange}/>

            <WordCardWrapper>
                {
                    data.map((word: Word) => <WordCard key={word.id} {...word}/>)
                }
            </WordCardWrapper>

        </>
    );
};


Search.getInitialProps = async ({req}) => {
    return {};
};

export default Search;
