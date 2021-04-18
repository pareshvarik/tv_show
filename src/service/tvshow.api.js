import axios from "axios";
const URL = "http://api.tvmaze.com/";
export function getAllShow() {
  return axios.get(URL + "shows");
}
export function getShowDetails(id) {
  return axios.get(URL + `shows/${id}`);
}
export function getShowCasts(id) {
  return axios.get(URL + `shows/${id}/cast`);
}
export function getShowSeason(id) {
  return axios.get(URL + `shows/${id}/seasons`);
}
export function searchShows(query) {
  return axios.get(URL + `search/shows?q=${query}`);
}
