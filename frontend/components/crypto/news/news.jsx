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
import { ContactsTwoTone } from "@material-ui/icons";


const useStyles = makeStyles(blogsStyle);

const News = ({ticker}) => { 
    const classes = useStyles();

    const [newsData, setNewsData] = useState([]);
    const [symbol, setSymbol] = useState('BTC');
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);
    const [date, setDate] = useState([]);
    const [source, setSource] = useState([]);
    const [imageurl, setImageurl] = useState([]);
    const [guid, setGuid] = useState([]);



    useEffect( () => {
        setSymbol(ticker)

        const fetchNewsAPI = async () => {
            const res = await fetchNews(symbol);

            setAndFormatData(res);

        }
        
        fetchNewsAPI();
    }, []);
    
    const setAndFormatData = (data) => {
        let newsData = data.Data.slice(0,5)
        let tempTitleArr = [];
        let tempBodyArr = [];
        let tempDateArr = [];
        let tempSourceArr = [];
        let tempImageUrlArr = [];
        let tempGuidArr = [];

        newsData.map ( (article, idx) => {
            let tempDate = new Date(article.published_on * 1000);		//=> Sun Jan 18 1970 21:48:07 GMT-0500 (Eastern Standard Time)		date object!
            tempDate = date.toString().slice(4, 10);								//=> 'Jan 18'
            let tempBody = article.body.slice(0, 130) + '...';
            let { source, title, imageurl, guid } = article;       

            tempTitleArr.push(title);
            tempBodyArr.push(tempBody);
            tempDateArr.push(tempDate);
            tempSourceArr.push(source);
            tempImageUrlArr.push(imageurl);
            tempGuidArr.push(guid);
        })
    
        setTitle(tempTitleArr);
        setBody(tempBodyArr);
        setDate(tempDateArr);
        setSource(tempSourceArr);
        setImageurl(tempImageUrlArr);
        setGuid(tempGuidArr);
    };

   
    return (
        <div>   
            <div className={classes.blog} >
                <div className={classes.container}>
                <h2 className={classes.title}>Latest News</h2>
                {title.map((post, idx) => (
                        <div key={idx}>

                        <Card plain blog className={classes.card}>
                            <GridContainer >
                            <GridItem xs={12} sm={4} md={4} style={{maxWidth: '700px'}}>
                                <CardHeader image plain>
                                <a href={guid[idx]}>
                                    <img src={imageurl[idx]} alt="..." style={{maxWidth: '15rem'}}/>
                                </a>
                                <div
                                    className={classes.coloredShadow}
                                    style={{
                                    backgroundImage: `url(${imageurl[idx]})`,
                                    opacity: "1",
                                    maxWidth: '15rem'
                                    }}
                                />
                                </CardHeader>
                            </GridItem>
                            <GridItem xs={12} sm={8} md={8}>
                                <Info>
                                <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                                </Info>
                                <h3 className={classes.cardTitle}>
                                <a href={guid[idx]}>
                                    {title[idx]}
                                </a>
                                </h3>
                                <p className={classes.description}>
                                    {body[idx]}
                                <a href={guid[idx]}>
                                    {" "}
                                    Read More{" "}
                                </a>
                                </p>
                                <p className={classes.author}>
                                by{" "}
                                <a href={guid[idx]} >
                                    <b>{source[idx]}</b>
                                </a>{" "}
                                    {date[idx]}
                                </p>
                            </GridItem>
                            </GridContainer>
                        </Card>
                        </div>
                ))}
                </div>
            </div>
        </div>   
    )
}

export default News;