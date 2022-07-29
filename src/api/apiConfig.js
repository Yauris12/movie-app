const apiConfig = {
  baseUrl: process.env.REACT_APP_BASE_URL || 'https://api.themoviedb.org/3/',
  apiKey: process.env.REACT_APP_API_KEY || '1b3c345322f1155f1c7c52185d692706',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig
