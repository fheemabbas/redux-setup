import axios from "axios";

const API_KEY = "c48fd0cac928ed6da869366c5b004d56";
export const geData = () => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    .then((result) => {
      dispatch({
        type: "GET_DATA",
        payload: result,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LIST_ERROR",
        payload: err,
      });
    });
};
