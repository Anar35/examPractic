import { BASE_URL } from "./baseUrl";
import axios from "axios";

//get all blogs
export const getAllBlogs = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL + "/blogs";
  } else {
    URL = BASE_URL + `/authors?name=${name}`;
  }
  await axios.get(URL).then((res) => (globalData = res.data));
  return globalData;
};

//get by ID
export const getBlogbyID = async (id) => {
  let globalData;
  await axios
    .get(`${BASE_URL}/blogs/${id}`)
    .then((res) => (globalData = res.data));
  return globalData;
};

//delete by ID
export const deleteBlogbyID = (id) => {
  axios.delete(`${BASE_URL}/blogs/${id}`);
};

//edit by ID
export const editBlogbyID = (id, payload) => {
  axios.put(`${BASE_URL}/blogs/${id}`, payload);
};

//add by ID
export const addBlog = (payload) => {
  axios.post(`${BASE_URL}/blogs`, payload);
};