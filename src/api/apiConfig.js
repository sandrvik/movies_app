const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: `api_key=0403d904091d3e506c0778c3ba0ee2c7`,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
}

export default apiConfig;