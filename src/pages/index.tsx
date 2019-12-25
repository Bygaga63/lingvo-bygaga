import {NextPage} from 'next';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/rootReducer";
import {addWord, removeWord, Word} from '../features/wordsList/wordsSlice';

const Home: NextPage<{ userAgent: string }> = ({userAgent}) => {
    const words = useSelector((state: RootState) => state.words.data);

    const dispatch = useDispatch();
    const add = () => dispatch(addWord({id: '3', value: 'Dog', translate: 'собака'}));
    const remove = () => dispatch(removeWord('3'));

    return (<div>
        {Object.values(words).map((word: Word) => <div key={word.id}>{word.value}</div>)}
        <button onClick={add}>Добавить</button>
        <button onClick={remove}>Удалить</button>
    </div>)
};



Home.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
};

export default Home;
