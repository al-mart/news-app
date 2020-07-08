import React, {Component} from "react";
import Article from "../../components/Article/Article";
import classes from "./Newsfeed.css";
import axios from "../../axios";

import queryStringLib from "querystring";


class NewsFeed extends Component{

    state = {
        articles: null,
        categoryName: null,
        query: ""
    }

    componentDidMount() {
        let searchParams = this.getSearchParams();
        let newRoute = this.props.match.path.slice(1);
        this.setState({categoryName: newRoute, query:searchParams})
        this.loadData(newRoute, searchParams);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let searchParams = this.getSearchParams();
        let newRoute = this.props.match.path.slice(1);
        if(this.state.categoryName !== newRoute || this.state.query !== searchParams){
            this.setState({categoryName: newRoute, query:searchParams})
            this.loadData(newRoute,searchParams);
        }
    }

    getSearchParams = () => {
        return queryStringLib.parse(this.props.location.search)["?query"];

    }

    loadData = (categoryName, query) => {
        if(query) {
            axios.get(`everything?language=en&q=` + query)
                .then(res => {
                    this.setState({articles: res.data.articles});
                })
                .catch(error => console.log(error));
        }
        else{
            axios.get(`top-headlines?country=us&category=${categoryName}`)
                .then(res => {
                    this.setState({articles: res.data.articles});
                })
                .catch(error => console.log(error));
        }

    }

    render() {
        let articles = null;

        if (this.state.articles){
            articles = this.state.articles.map( (article, index) => {
               return <Article key={index} article={article} />
            });
        }

        let headingName = this.props.match.path.slice(1);
        headingName = headingName.charAt(0).toUpperCase() + headingName.slice(1);

        return (
            <section className={classes.NewsFeed}>
                <h1>Latest {headingName} News</h1>
                {articles}
            </section>
        );
    }

}

export default NewsFeed;