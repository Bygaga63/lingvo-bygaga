import {NextPage} from 'next';
import Link from "next/link";

const Home: NextPage<{ userAgent: string }> = ({userAgent}) => {
    return (<>
        <Link href={"/search"}>
            <a>Search</a>
        </Link>
    </>)
};



Home.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
};

export default Home;
