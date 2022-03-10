import { useEffect } from 'react';
import { NewsService } from './api/newsService';
import './index.css';


const App = () => {
  const getTopHeadlines = async () => {
    const res = await NewsService.getTopHeadlines({ country: 'us' })
    console.log('res: ', res);
  }
  useEffect(() => {
    getTopHeadlines();
  }, [])
  return (
    <div className='w-full flex justify-center'>
      <main className="max-w-screen-lg w-full p-2 pt-6 sm:px-10">
        <div className="flex justify-between pb-6">
          <h1 className='text-4xl font-extrabold text-gray-900'>Lorem Ipsum News</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
