const NewsAPI = require('newsapi');
const newsapi = new NewsAPI("9f1faac85db14824b3c7f61c0d257535");

const handler = async (req, res) => {
    const articles = await newsapi.v2.topHeadlines({
        category: 'general',
        language: 'en',
        country: 'in'
    })
    res.status(200).json(articles);
}


export default handler;