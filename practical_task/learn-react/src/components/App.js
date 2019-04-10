import React from "react";
// import Article from "./Article";
import ArticleList from './ArticleList'
import articles from "../fixtures"

function App() {
    return (
        <div>
            <h1>App name</h1>
            {/* <Article article={articles[0]} foo="bar" flag/>          */}
            <ArticleList articles = {articles} />
        </div>
    )
}

export default App;