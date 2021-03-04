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

const News = (props) => { 
    const [newsData, setNewsData] = useState([]);
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
            const res = await fetchNews('BTC');

            setAndFormatData(res);
        }
        
        fetchNewsAPI();
    }, []);
    
    const setAndFormatData = (data) => {
        let newsData = data.Data.slice(0,5)
        console.log(data.Data,' come on data.Data')
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
            hi 
                <Card plain blog className={classes.card}>
                    <GridContainer>
                    <GridItem xs={12} sm={4} md={4}>
                        <CardHeader image plain>
                        <a href={guid} onClick={e => e.preventDefault()}>
                            <img src={imageurl[0]} alt="..." />
                        </a>
                        <div
                            className={classes.coloredShadow}
                            style={{
                            backgroundImage: `url(${imageurl[0]})`,
                            opacity: "1"
                            }}
                        />
                        <div
                            className={classes.coloredShadow}
                            style={{
                            backgroundImage: `url(${imageurl[0]})`,
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
                        <a href={guid[0]}>
                            {title[0]}
                        </a>
                        </h3>
                        <p className={classes.description}>
                            {body[0]}
                        <a href={guid[0]}>
                            {" "}
                            Read More{" "}
                        </a>
                        </p>
                        <p className={classes.author}>
                        by{" "}
                        <a href={guid[0]} >
                            <b>{source[0]}</b>
                        </a>{" "}
                            {date[0]}
                        </p>
                    </GridItem>
                    </GridContainer>
                </Card>
        </div>   
    )
}

export default News;