/**
 * =============================================================================
 * Src | Components | Icons
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
import React from "react";
/**
 * Loading Icon
 * -----------------------------------------------------------------------------
 */
export const LoadingIcon = class extends React.Component {
    /**
     * Render
     * -------------------------------------------------------------------------
     *
     * @returns {React.Component} React Component
     */
    render() {
        return (
            <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>
        );
    }
};
/**
 * Redo Icon
 * -----------------------------------------------------------------------------
 */
export const RedoIcon = class extends React.Component {
    /**
     * Render
     * -------------------------------------------------------------------------
     * @returns {React.Component} React Component
     */
    render() {
        return (
            <span>
                <i className="fas fa-redo"></i>
            </span>
        );
    }
};
