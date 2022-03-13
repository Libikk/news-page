const Article = ({ article: { description, urlToImage, url, title, source }}) => {
    return <a href={url} className="block group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
    <div className="relative bg-gray-100 pt-[50%] overflow-hidden">
      <div className="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
        <img src={urlToImage} alt="" className="absolute inset-0 w-full h-full" />
      </div>
    </div>
    <div className="py-3 px-4">
      <p className="text-xl font-medium text-gray-900 mb-1">
        {title}
      </p>
      <p className="text-xs font-medium text-gray-500">{source.name}</p>
    </div>
  </a>
}

export default Article;
