import axios from "axios";
//What is Axios? - Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. This promise-based API allowed us to asynchronously make HTTP requests to fetch resources available on the internet.

//initializing the axios component
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
