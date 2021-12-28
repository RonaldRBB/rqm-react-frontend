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
import { LoadingIcon, RedoIcon } from "./icons";
/**
 * Quote Card
 * -----------------------------------------------------------------------------
 */
export default class QuoteCard extends React.Component {
    /**
     * Render
     * -------------------------------------------------------------------------
     *
     * @returns {React.Component} React Component
     */
    render() {
        return (
            <div className="card w-50 shadow rounded-3" id="quote-box">
                {/* Card Body */}
                <div className="card-body">
                    <div className="card-title text-primary">
                        <i className="fas fa-quote-left fa-2x"></i>
                    </div>
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
                                {this.props.loadingState ? (
                                    <LoadingIcon />
                                ) : (
                                    <RedoIcon />
                                )}{" "}
                                New Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
