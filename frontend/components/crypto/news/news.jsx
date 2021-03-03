import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/advert/components/Card/Card";
import CardHeader from "../../../components/advert/components/Card/CardHeader";
import Info from "../../../components/Typography/Info.js";
import Danger from "../../../components/Typography/Danger.js";
import Success from "../../../components/Typography/Success.js";

import blogsStyle from "../../../../app/assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import blog8 from "../../../../app/assets/img/examples/blog8.jpg";
import cardBlog4 from "../../../../app/assets/img/examples/card-blog4.jpg";
import office2 from "../../../../app/assets/img/office2.jpg";

import { fetchNews } from "../../../util/coin_api_util";


const useStyles = makeStyles(blogsStyle);
const News = (props) => { 
    const [news, setNews] = useState([]);
    const [symbol, setSymbol] = useState('BTC');

    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);
    const [date, setDate] = useState([]);
    const [source, setSource] = useState([]);
    const [imageurl, setImageurl] = useState([]);
    const [guid, setGuid] = useState([]);

    const classes = useStyles();

    useEffect( () => {
        const fetchNewsAPI = async () => {
            const response = await fetchNews('BTC');
            
            //slice up to 4 to grab 5 top articles
            setNews(response.responseJSON)
            console.log(response, 'this is the response')
        }
        fetchNewsAPI();
        console.log(news, 'this is the news')
    });

    const showNews = () => {

        return (
            <div>
                { news.map((article, idx) => {
                    let date = new Date(article.published_on * 1000);		//=> Sun Jan 18 1970 21:48:07 GMT-0500 (Eastern Standard Time)		date object!
                    date = date.toString().slice(4, 10);								//=> 'Jan 18'
                    let body = article.body.slice(0, 130) + '...';
                    let { source, title, imageurl, guid } = article;       

                        <Card plain blog className={classes.card}>
                            <GridContainer>
                            <GridItem xs={12} sm={4} md={4}>
                                <CardHeader image plain>
                                <a href={guid} onClick={e => e.preventDefault()}>
                                    <img src={imageurl[idx]} alt="..." />
                                </a>
                                <div
                                    className={classes.coloredShadow}
                                    style={{
                                    backgroundImage: `url(${imageurl[idx]})`,
                                    opacity: "1"
                                    }}
                                />
                                <div
                                    className={classes.coloredShadow}
                                    style={{
                                    backgroundImage: `url(${imageurl[idx]})`,
                                    opacity: "1"
                                    }}
                                />
                                </CardHeader>
                            </GridItem>
                            <GridItem xs={12} sm={8} md={8}>
                                <Info>
                                <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                                </Info>
                                <h3 className={classes.cardTitle}>
                                <a href={guid} onClick={e => e.preventDefault()}>
                                    {title[idx]}
                                </a>
                                </h3>
                                <p className={classes.description}>
                                    {body[idx]}
                                <a href={guid} onClick={e => e.preventDefault()}>
                                    {" "}
                                    Read More{" "}
                                </a>
                                </p>
                                <p className={classes.author}>
                                by{" "}
                                <a href={guid} onClick={e => e.preventDefault()}>
                                    <b>{source[idx]}</b>
                                </a>{" "}
                                    {date[idx]}
                                </p>
                            </GridItem>
                            </GridContainer>
                        </Card>
                    })
                }  
            </div>
        )    
    }

    return  showNews();
}

export default News;