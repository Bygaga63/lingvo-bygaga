import {NextPage} from 'next';
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchWords} from "features/words/wordsSlice";
import {RootState} from "app/rootReducer";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

}));

const WordMeaning: NextPage<{}> = (props: any) => {
    const dispatch = useDispatch();
    const onChange = (text: string) => {
        dispatch(fetchWords(text));
    };
    console.log(props);
    const {isLoading, data, error} = useSelector((state: RootState) => state.words);
    return (
        <>
            Test

    </>
);
};


WordMeaning.getInitialProps = async (props: any) => {
    console.log(props.query.id);
    // console.log(props);
    // console.log(store);

    return {test: 'test', query: props.query.id};
};

export default WordMeaning;
