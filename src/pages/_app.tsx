import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import makeStore from "app/store";
import {CssBaseline} from "@material-ui/core";
import {Layout} from "components";
import withRedux from "next-redux-wrapper";
import AppThemeProvider from "../app/AppThemeProvider";
import 'app-styles.css';


class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }

    static async getInitialProps({Component, ctx}: any) {

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {props} = this as any;
        const {Component, pageProps, store} = props;

        return (<>
            <Provider store={store}>
                <AppThemeProvider>
                    <CssBaseline/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AppThemeProvider>
            </Provider>
        </>)
    }
}

export default withRedux(makeStore)(MyApp);
