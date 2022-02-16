export const getGifs = async (query) => {
  const api_key = "vLxKtsJUr5AOzOOrRO2DQLzFL5CkjoW5";
  const url_base = "https://api.giphy.com/v1/gifs";

  // https://api.giphy.com/v1/gifs/trending?api_key=vLxKtsJUr5AOzOOrRO2DQLzFL5CkjoW5&limit=25&rating=g
  // https://api.giphy.com/v1/gifs/search?api_key=vLxKtsJUr5AOzOOrRO2DQLzFL5CkjoW5&q=messi&limit=25&offset=0&rating=r&lang=es

  const limit = 15;
  let url = "";
  if (query === "") {
    url = `${url_base}/trending?limit=${limit}&api_key=${api_key}&rating=r`;
  } else {
    url = `${url_base}/search?api_key=${api_key}&q=${query}&limit=${limit}&offset=0&rating=r&lang=es`;
  }
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
};
