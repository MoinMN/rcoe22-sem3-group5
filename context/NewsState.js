import React, { useEffect, useState } from 'react'
import NewsContext from './NewsContext'


const NewsState = (props) => {

    const [category, setCategory] = useState('General');
    const [country, setCountry] = useState('in');
    const [lang, setLang] = useState('');
    const [keyword, setKeyword] = useState('');
    const [articles, setArticles] = useState([]);
    const [trendingArticles, setTrendingArticles] = useState([]);
    const [searchArticles, setSearchArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [DateStart, setDateStart] = useState('');
    const [DateEnd, setDateEnd] = useState('');

    useEffect(() => {
        console.log("I am useEffect Hook!");
        updateNews();
        trendingNews();
    }, [category, country])

    const trendingNews = async () => {
        let requestbody = {
            // Newstype: 'headlines',
            // category: category,
            country: country,
            // lang: lang,
            pageSize: 10
        }
        let data = await fetch(`http://localhost:3000/api/getnews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestbody)
        });
        let parsedData = await data.json();
        setTrendingArticles(parsedData.articles)
    }

    

    const updateNews = async () => {
        let requestbody = {
            // Newstype: 'headlines',
            category: category,
            country: country,
            lang: lang,
        }
        let data = await fetch(`http://localhost:3000/api/getnews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestbody)
        });
        let parsedData = await data.json();
        setArticles(parsedData.articles)
    }

    const searchNews = async () => {
        let requestbody = {
            Newstype: 'everything',
            keyword: keyword,
            from: DateStart ,
            to: DateEnd,
        }
        let data = await fetch(`http://localhost:3000/api/getnews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestbody)
        });
        let parsedData = await data.json();
        setSearchArticles(parsedData.articles)
    }

    return (
        <NewsContext.Provider value={{ category, country, lang, keyword, articles, searchArticles, trendingArticles, DateStart, DateEnd, setCategory, setKeyword, setCountry, setSearchArticles, setDateStart, setDateEnd, updateNews, searchNews, trendingNews }} >
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState