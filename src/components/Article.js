const Article = ({ article: { urlToImage, url, title, source }}) => {
    return <a href={url} className="block relative bg-white rounded-lg shadow-sm ring-1 ring-black ring-opacity-5 h-full">
    <div className="relative bg-gray-100 pt-[50%]">
      <div className="absolute inset-0 w-full h-full rounded-t-lg ">
        <img src={urlToImage} alt="" className="absolute inset-0 w-full h-full" />
        <p className="absolute right-2 bottom-2 text-sm font-medium text-white opacity-80 self-end text-left">{source.name}</p>
      </div>
    </div>
    <div className="py-3 px-4 grid">
      <p className="text-xl font-medium text-gray-900 mb-1">
        {title}
      </p>
    </div>
  </a>
}

export default Article;
