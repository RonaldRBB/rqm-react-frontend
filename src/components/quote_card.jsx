/**
 * =============================================================================
 * Src | Components | Quote Card
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
import React from "react";
/**
 * Quote Card
 * -----------------------------------------------------------------------------
 */
export default class QuoteCard extends React.Component {
    /**
     * Render
     * -------------------------------------------------------------------------
     */
    render() {
        return (
            <div className="card" id="quote-box" style={{ width: "50vw" }}>
                {/* Card Body */}
                <div className="card-body">
                    <h1 className="card-title">"</h1>
                    <p className="card-text" id="text">
                        {this.props.quote.text}
                    </p>
                    <p className="card-text text-end text-muted" id="author">
                        - {this.props.quote.author}
                    </p>
                </div>
                {/* Card Footer */}
                <div className="card-footer">
                    <div className="row">
                        <div className="col-6  text-start">
                            <button
                                className="btn btn-primary"
                                id="tweet-quote"
                                onClick={this.props.tweetQuote}
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                        </div>
                        <div className="col-6 text-end">
                            <button
                                className="btn btn-primary"
                                id="new-quote"
                                onClick={this.props.addNewQuote}
                            >
                                <span id="new-quote-icon"></span>{" "}
                                {/* {this.state.button.title} */}
                                New Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
