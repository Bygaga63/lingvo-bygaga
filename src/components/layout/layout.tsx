import React, {FunctionComponent} from 'react';
import {Container} from '@material-ui/core';

type Props = {}

const Layout: FunctionComponent<Props> = ({children}) => {
    return (
        <>
            <div>
                <Container maxWidth="md">
                    {children}
                </Container>
            </div>
            <style jsx>{`
                    div{
                    background-color: #242424;
                    height: 100vh;
                    }
            `}</style>
        </>
    );
};

export default Layout;
