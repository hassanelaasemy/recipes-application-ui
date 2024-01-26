import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: size || "20", tags },
    headers: {
      "X-RapidAPI-Key": "f223cb8503msh90d56b19ef1cd75p1b5765jsna5a31ff9433c",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  return await axios.request(options);
};
