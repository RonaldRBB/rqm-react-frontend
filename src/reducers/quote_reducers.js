/**
 * =============================================================================
 * Src | Store | Quote Reducers
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
import { newQuote } from "../utils/constants";

/**
 *  Add New Quote Reducer
 * -----------------------------------------------------------------------------
 */
const addNewQuoteReducer = (state = { text: "N/A", author: "N/A" }, action) => {
    switch (action.type) {
        case newQuote:
            return action.quote;
        default:
            return state;
    }
};
/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default addNewQuoteReducer;
