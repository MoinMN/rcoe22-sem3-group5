const NewsAPI = require('newsapi');
const newsapi = new NewsAPI("dd7786f2b41c4a159cdacdeb54d9e9ce");

const handler = async (req, res) => {
    let articles
    if (req.body.Newstype == "everything") {
        articles = await newsapi.v2.everything({
            q: req.body.keyword,
            language: 'en',
            from: req.body.from, //(req.body.DateStart === '') ? new Date(req.body.DateStart).toISOString() : '',
            to: req.body.to, //(req.body.DateEnd === '') ? new Date(req.body.DateEnd).toISOString() : '',
            sortBy: 'relevancy'
        })
    }
    else {
        articles = await newsapi.v2.topHeadlines({
            category: req.body.category,
            language: req.body.lang,
            country: req.body.country,
            pageSize: 100,
            sortBy: 'popularity'
        })
    }
    res.status(200).json(articles);
}


export default handler;