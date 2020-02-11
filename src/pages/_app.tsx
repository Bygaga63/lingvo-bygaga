import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import makeStore from "app/store";
import {ThemeProvider} from "@material-ui/styles";
import AppTheme from "app/theme";
import {CssBaseline} from "@material-ui/core";
import {Layout} from "components";
import withRedux from "next-redux-wrapper";

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
        // console.log(pageProps);
        return {pageProps};
    }

    render() {
        const {props} = this as any;
        const {Component, pageProps, store} = props;

        return (<>
            <Provider store={store}>
                <ThemeProvider theme={AppTheme}>
                    <CssBaseline/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Provider>
        </>)
    }
}

export default withRedux(makeStore)(MyApp);
