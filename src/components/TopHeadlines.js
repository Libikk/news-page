import Article from "./Article";

const TopHeadlines = ({ topHeadlines }) => {
    if (!topHeadlines) return <div>Loading...</div>

    const headlinesWithImages = topHeadlines.filter(({ urlToImage }) => urlToImage);
    const [firstHeadline, ...rest] = headlinesWithImages

    return <div>
        <Article article={firstHeadline} />
    </div>
}

export default TopHeadlines;
