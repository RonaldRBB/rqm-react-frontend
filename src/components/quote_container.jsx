/**
 * =============================================================================
 * Src | Components | Quote Container
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
import React from "react";
import QuoteCard from "./quote_card";
/**
 * Quote Container
 * -----------------------------------------------------------------------------
 */
export default class QuoteContainer extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <QuoteCard
                    quote={this.props.quote}
                    addNewQuote={this.props.addNewQuote}
                />
            </div>
        );
    }
}
