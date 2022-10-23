import React, { useContext } from 'react'
import NewsContext from '../context/NewsContext';
import NewsItem from './NewsItem'


const SearchNews = () => {
    const context = useContext(NewsContext);
    const {searchArticles, keyword, DateStart, DateEnd, setKeyword, setDateStart, setDateEnd} = context;

    return (
        <div>
            {searchArticles.length != 0 && <div className="container mx-auto">
                
                <h2 className='text-4xl text-center my-2 font-bold'>Showing results for - {keyword}</h2>
                <div className="grid grid-cols-3 gap-3  h-screen place-items-center">
                    {searchArticles.map((element) => {
                        return <div className="" key={element.id}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })};
                </div>
            </div>}
        </div>
    )
}

export default SearchNews