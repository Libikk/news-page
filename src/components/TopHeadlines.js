import Article from "./Article";

const TopHeadlines = ({ topHeadlines }) => {
    if (!topHeadlines) return <div>Loading...</div>

    const headlinesWithImages = topHeadlines.filter(({ urlToImage }) => urlToImage);
    const isFirstHeadline = (index) => index === 0;

    return (
        <div className="grid grid-cols-4 gap-8 mt-10">
            {headlinesWithImages.map((headline, i) =>
                <div className={`${isFirstHeadline(i) && 'col-start-1 col-end-5 row-start-1 row-end-4'}`}>
                    <Article article={headline}  />
                </div>
            )}
        </div>
    )
}

export default TopHeadlines;
