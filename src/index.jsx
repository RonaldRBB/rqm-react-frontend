import React from "react";
import ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
/**
 * *****************************************************************************
 * CONSTANTS
 * *****************************************************************************
 */
const NEW_QUOTE = "NEW_QUOTE";
const LOADING_ICON =
    "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>";
const SAVE_ICON = "<i class='fas fa-redo'></i>";
/**
 * *****************************************************************************
 * REDUX
 * *****************************************************************************
 */
const addNewQuote = (quote) => {
    return {
        type: NEW_QUOTE,
        quote: quote,
    };
};
const addNewQuoteReducer = (state = { text: "N/A", author: "N/A" }, action) => {
    switch (action.type) {
        case NEW_QUOTE:
            return action.quote;
        default:
            return state;
    }
};
const store = Redux.createStore(addNewQuoteReducer);

/**
 * *****************************************************************************
 * REACT
 * *****************************************************************************
 */
/**
 * -----------------------------------------------------------------------------
 * Quote Card
 * -----------------------------------------------------------------------------
 */
class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: { title: "New Quote", icon: SAVE_ICON },
            tweetUrl: "",
        };
        this.addNewQuote = this.addNewQuote.bind(this);
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
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return { text: data.content, author: data.author };
    }
    /**
     * Change Button To Loading
     * -------------------------------------------------------------------------
     */
    changeButtonToLoading() {
        this.setState({
            button: {
                title: "Loading...",
            },
        });
        var newQuoteIcon = document.getElementById("new-quote-icon");
        newQuoteIcon.innerHTML = LOADING_ICON;
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
        newQuoteIcon.innerHTML = SAVE_ICON;
    }
    createTweetUrl() {
        this.setState({
            tweetUrl:
                "https://twitter.com/intent/tweet?text=" +
                `${this.props.quote.text} - ${this.props.quote.author}`,
        });
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
                            <a
                                className="btn btn-primary"
                                id="tweet-quote"
                                href={this.state.tweetUrl}
                                target="_top"
                            >
                                <i className="fab fa-twitter "></i>
                            </a>
                        </div>
                        <div className="col-6 text-end">
                            <a
                                className="btn btn-primary"
                                id="new-quote"
                                onClick={this.addNewQuote}
                            >
                                <span id="new-quote-icon"></span>{" "}
                                {this.state.button.title}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/**
 * Quote Container
 */
class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    }
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
/**
 * *****************************************************************************
 * REACT REDUX
 * *****************************************************************************
 */
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
const mapStateToProps = (state) => ({ quote: state });
const mapDispatchToProps = (dispatch) => ({
    addNewQuote: (quote) => dispatch(addNewQuote(quote)),
});
const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteContainer);
class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}
/**
 * *****************************************************************************
 * RENDER
 * *****************************************************************************
 */
ReactDOM.render(<AppWrapper />, document.getElementById("root"));
