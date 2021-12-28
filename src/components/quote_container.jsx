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
import config from "../config/config";
/**
 * Quote Container
 * -----------------------------------------------------------------------------
 */
export default class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
        this.addNewQuote = this.addNewQuote.bind(this);
        this.tweetQuote = this.tweetQuote.bind(this);
    }
    /**
     * Add Quote at the Beginning
     * -------------------------------------------------------------------------
     *
     * @returns {void}
     */
    componentDidMount() {
        this.addNewQuote();
    }
    /**
     * Add Quote When Button is Pressed
     * -------------------------------------------------------------------------
     *
     * @returns {void}
     */
    async addNewQuote() {
        this.changeLoadingState(true);
        this.props.addNewQuote(await this.getQuote());
        this.createTweetUrl();
        this.changeLoadingState(false);
    }
    /**
     * Change Loading State
     * -------------------------------------------------------------------------
     *
     * @param {boolean} loadingState Loading State
     * @return {void}
     */
    changeLoadingState(loadingState) {
        this.setState({ loading: loadingState });
    }
    /**
     * Gets Quote From Api
     * -------------------------------------------------------------------------
     *
     * @returns {Promise<Object>} Promise of Quote
     */
    async getQuote() {
        const response = await fetch(`${config.backendUrl}/random`);
        const data = await response.json();
        return { text: data.text, author: data.author };
    }
    /**
     * Tweet Quote
     * -------------------------------------------------------------------------
     *
     * @returns {void}
     */
    tweetQuote() {
        window.open(this.createTweetUrl(), "_blank");
    }
    /**
     * Create Tweet Url
     * -------------------------------------------------------------------------
     *
     * @returns {string} Tweet Url
     */
    createTweetUrl() {
        return (
            "https://twitter.com/intent/tweet?text=" +
            encodeURIComponent(
                `${this.props.quote.text} - ${this.props.quote.author}`
            )
        );
    }

    /**
     * Render
     * -------------------------------------------------------------------------
     *
     * @returns {React.Component} React Component
     */
    render() {
        return (
            <div
                className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
                id="quote-container"
            >
                <QuoteCard
                    quote={this.props.quote}
                    addNewQuote={this.addNewQuote}
                    tweetQuote={this.tweetQuote}
                    loadingState={this.state.loading}
                />
            </div>
        );
    }
}
