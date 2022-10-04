const NewsAPI = require('newsapi');
const newsapi = new NewsAPI("9f1faac85db14824b3c7f61c0d257535");

const handler = async (req, res) => {
    let articles
    if (req.body.Newstype == 'Everything') {
        articles = await newsapi.v2.everything({
            q: req.body.keyword
        })
    }
    else {
        articles = await newsapi.v2.topHeadlines({
            category: req.body.category,
            language: req.body.lang,
            country: req.body.country
        })
    }
    res.status(200).json(articles);
}


export default handler;