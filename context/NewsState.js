import React, { useEffect, useState } from 'react'
import NewsContext from './NewsContext'


const NewsState = (props) => {
    const [category, setCategory] = useState('General');
    const [country, setCountry] = useState('in');
    const [lang, setLang] = useState('');
    const [keyword, setKeyword] = useState('');
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        console.log("I am useEffect Hook!");
        updateNews();
        console.log(country);
    }, [category, country])

    let requestbody = {
        // Newstype: 'headlines',
        category: category,
        country: country,
        lang: lang,
        keyword: keyword
    }

    const updateNews = async () => {
        let data = await fetch(`http://localhost:3000/api/getnews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestbody)
        });
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        console.log(parsedData.articles);
    }

    return (
        <NewsContext.Provider value={{ category, country, lang, keyword, articles, setCategory, setKeyword, setCountry, updateNews }} >
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState