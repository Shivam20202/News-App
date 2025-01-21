
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({ category }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = ` https://newsdata.io/api/1/latest?apikey=pub_555024ca4ca875ca28c9cc741290c2286ea8f&q=${category}`;
        
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setResults(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error("Fetch error:", error);
                setLoading(false);
            });
    }, [category]);

    return (
        <div className="news-section">
            <h2 className="text-center">Headlines  <span className="badge bg-info">Today</span></h2>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="row"> {/* Bootstrap row for responsiveness */}
                    {results.map((news, index) => (
                        <NewsItem key={index} title={news.title} description={news.description} src={news.image_url} url={news.link} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsBoard;





























// import { useEffect, useState } from "react"
// import NewsItem from "./NewsItem";
// import { config } from "../config";


// const NewsBoard = (category) => {

//   const [articles,setArticles]=useState([]);
  
//   useEffect(()=>{
//     let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${config.newsApiKey}`;
//     fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));

//   },[])
  
//   return (
//     <div>

//         <h2 className="text-center">Latest<span className="badge bg-danger">News</span></h2>
//       {articles.map((news,index)=>{
//       return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//       })}
//     </div>
//   )
// }

// export default NewsBoard
