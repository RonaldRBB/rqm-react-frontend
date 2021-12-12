/**
 * =============================================================================
 * Src | Store | Index React Redux
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
import * as ReactRedux from "react-redux";
import QuoteContainer from "../components/quote_container";
import addNewQuote from "../actions/quote_actions";

/**
 * React Redux
 * -----------------------------------------------------------------------------
 */
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
const mapStateToProps = (state) => ({ quote: state });
const mapDispatchToProps = (dispatch) => ({
    addNewQuote: (quote) => dispatch(addNewQuote(quote)),
});
const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteContainer);
/**
 * Export
 * -----------------------------------------------------------------------------
 */
export { Container, Provider };
