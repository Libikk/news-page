import Article from "./Article";

const TopHeadlines = ({ topHeadlines }) => {
    if (!topHeadlines) return <div>Loading...</div>

    const headlinesWithImages = topHeadlines.filter(({ urlToImage }) => urlToImage).slice(0, 5);
    const [firstHeadline, ...restHeadlines] = headlinesWithImages;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10">
            <div className="sm:col-span-2 md:col-span-4">
                <Article article={firstHeadline} isBrakingNews />
            </div>
            {restHeadlines.map((headline) => <Article key={headline.title} article={headline}  />)}
        </div>
    )
}

export default TopHeadlines;
