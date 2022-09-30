// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const news = require('gnews');

const handler = async (req, res) => {

    const articles = await news.headlines();
    
    for (let article of articles) {
        console.log(article.pubDate + ' | ' + article.title);
    }
    
  res.status(200).json(typeof(articles[0].pubDate),articles)
}

export default handler;
