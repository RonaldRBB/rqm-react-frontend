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
import config from "../config/config";
import { loadingIcon, saveIcon } from "../utils/constants";
/**
 * Quote Card
 * -----------------------------------------------------------------------------
 */
export default class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: { title: "New Quote", icon: saveIcon },
            tweetUrl: "",
        };
        this.addNewQuote = this.addNewQuote.bind(this);
        this.tweetQuote = this.tweetQuote.bind(this);
    }
    /**
     * Add Quote at the Beginning
     * -------------------------------------------------------------------------
     */
    componentDidMount() {
        this.addNewQuote();
    }
    /**
     * Add Quote When Button is Pressed
     * -------------------------------------------------------------------------
     */
    async addNewQuote() {
        this.changeButtonToLoading();
        this.props.addNewQuote(await this.getQuote());
        this.changeButtonToNormal();
        this.createTweetUrl();
    }
    /**
     * Gets Quote From Api
     * -------------------------------------------------------------------------
     */
    async getQuote() {
        const response = await fetch(config.backendUrl);
        const data = await response.json();
        return { text: data.text, author: data.author };
    }
    /**
     * Change Button To Loading
     * -------------------------------------------------------------------------
     */
    changeButtonToLoading() {
        this.setState({ button: { title: "Loading..." } });
        var newQuoteIcon = document.getElementById("new-quote-icon");
        newQuoteIcon.innerHTML = loadingIcon;
    }
    /**
     * CHange Button to Normal
     * -------------------------------------------------------------------------
     */
    changeButtonToNormal() {
        this.setState({
            button: {
                title: "New Quote",
            },
        });
        var newQuoteIcon = document.getElementById("new-quote-icon");
        newQuoteIcon.innerHTML = saveIcon;
    }
    /**
     * Create Tweet Url
     * -------------------------------------------------------------------------
     */
    createTweetUrl() {
        this.setState({
            tweetUrl:
                "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent(
                    `${this.props.quote.text} - ${this.props.quote.author}`
                ),
        });
    }
    tweetQuote() {
        window.open(this.state.tweetUrl, "_blank");
    }
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
                                onClick={this.tweetQuote}
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                        </div>
                        <div className="col-6 text-end">
                            <button
                                className="btn btn-primary"
                                id="new-quote"
                                onClick={this.addNewQuote}
                            >
                                <span id="new-quote-icon"></span>{" "}
                                {this.state.button.title}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
