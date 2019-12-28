import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import store from "app/store";
import {ThemeProvider} from "@material-ui/styles";
import AppTheme from "app/theme";
import {CssBaseline} from "@material-ui/core";
import {Layout} from "components";

export default class extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }

    static async getInitialProps({Component, router, ctx}: any) {
        const server = !!ctx.req;
        const state = store.getState();
        const out = {state, server} as any;

        if (Component.getInitialProps) {
            return {
                ...out,
                pageProps: {
                    ...await Component.getInitialProps(ctx)
                }
            }
        }

        return out
    }

    render() {
        const {props} = this as any;
        const {Component, pageProps} = props;

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
