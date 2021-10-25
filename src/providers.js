import React from "react";
import App from "./App";
import ResetCSS from "./global/resetCSS";
import GithubProvider from "./providers/githubProvider";

export default function Providers() {
    return (
        <main className="App">
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    )
}