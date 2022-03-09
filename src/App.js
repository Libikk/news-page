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
    <div className="App">
      123
    </div>
  );
}

export default App;
