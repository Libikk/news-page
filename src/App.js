import { useEffect, useState } from 'react';
import { NewsService } from './api/newsService';
import NewsCategoryFilters from './components/NewsCategoryFilters';
import TopHeadlines from './components/TopHeadlines';
import './index.css';


const App = () => {

  const [topHeadlines, setTopHeadlines] = useState(null);
  const getTopHeadlines = async ({ country }) => {
    const res = await NewsService.getTopHeadlines({ country })
    setTopHeadlines(res.articles)
  }
  const countries = [
    { countryCode: 'us', label: 'US' },
    { countryCode: 'gb', label: 'UK' },
    { countryCode: 'fr', label: 'France' },
    { countryCode: 'au', label: 'Australia' },
    { countryCode: 'in', label: 'India' },
  ]
  const [firstInitialTab] = countries;
  const [currentTab, setCurrentTab] = useState(firstInitialTab)

  useEffect(() => {
    getTopHeadlines({ country: currentTab.countryCode });
  }, [currentTab])

  return (
    <div className='w-full flex justify-center'>
      <main className="w-full pt-6 flex justify-center flex-col items-center">
        <div className="max-w-screen-xl flex justify-between pb-6 p-2 sm:px-10">
          <h1 className='text-4xl font-extrabold text-gray-900'>Lorem Ipsum News</h1>
        </div>

        <section className='max-w-screen-xl p-2 sm:px-10'>
          <NewsCategoryFilters countries={countries} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </section>
        <section className='border-t border-gray-300 bg-gray-100 w-full flex justify-center p-2 sm:px-10'>
          <div className='max-w-screen-xl'>
            <TopHeadlines topHeadlines={topHeadlines}  />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
