/**
 * =============================================================================
 * Src | Index
 * =============================================================================
 */
/**
 * Environment
 * -----------------------------------------------------------------------------
 */
import dotenv from "dotenv";
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./components/app_wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
/**
 * Activate Environment
 * -----------------------------------------------------------------------------
 */
dotenv.config();
/**
 * Render
 * -----------------------------------------------------------------------------
 */
ReactDOM.render(<AppWrapper />, document.getElementById("root"));
