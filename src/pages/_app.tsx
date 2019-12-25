import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from "../app/store";

export default class extends App {
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

        return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
        )
    }
}
