/**
 * =============================================================================
 * Src | Components | App Wrapper
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
import React from "react";
import store from "../store";
import { Container, Provider } from "../reducers/quote_provider";
/**
 * App Wrapper
 * -----------------------------------------------------------------------------
 */
export default class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}
