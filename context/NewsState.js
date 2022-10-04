import React, { useEffect, useState } from 'react'
import NewsContext from './NewsContext'


const NewsState = (props) => {
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('in');
    const [lang, setLang] = useState('en');
    const [keyword, setKeyword] = useState('');
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        updateNews();
    }, [category, country, lang, keyword, articles])

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
        console.log(parsedData);
        setArticles(parsedData.articles)
    }

    return (
        <NewsContext.Provider value={{ category, country, lang, keyword, articles, setCategory, setKeyword, updateNews }} >
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState