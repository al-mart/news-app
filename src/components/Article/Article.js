import React, {Component} from "react";
import classes from "./Article.css";

import noImage from "../../assets/noimage.png";

class Article extends Component {

    state = {
        id: null,
        author: null,
        content: null,
        description: null,
        publishedAt: null,
        source: null,
        title: null,
        url: null,
        urlToImage: null
    }

    render() {
        let content = null;

        let contentString = this.props.article.content;
        if (contentString) {
            contentString = contentString.slice(0, 200);
        }

        content = (
            <div>
                {contentString}
                <a className={classes.ReadMore} href={this.props.article.url} target="_blank">Read More</a>
            </div>
        );


        return (
            <article className={classes.Article}>
                <div
                    style={{backgroundImage: `url('${this.props.article.urlToImage ? this.props.article.urlToImage : noImage}')`}}
                    className={classes.ImgContainer}>
                </div>
                <div className={classes.ArticleBody}>
                    <h1>{this.props.article.title} Title</h1>
                    <div className={classes.Author}>
                        <span>By&nbsp;</span>
                        {this.props.article.author ?
                            <div><u>{this.props.article.author}</u></div> :
                            <div><u>Anonymous Source</u></div>}
                        {this.props.article.publishedAt ?
                            <div><span>&nbsp;On&nbsp; </span>
                                {this.props.article.publishedAt ?
                                    new Intl.DateTimeFormat("en-GB", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                    }).format(new Date(this.props.article.publishedAt)) : null}
                            </div> :
                            <div>Anonymous Source</div>}
                    </div>
                    {content}
                </div>
            </article>
        );
    }
}

export default Article;