const apiKey = process.env.API_KEY || '17dd3ac3633a465487f2d1662bd8490f';

export class NewsService {
  static getTopHeadlines = async ({ country, pageSize = 10 }) => fetch(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${apiKey}`).then(res => res.json());
}
