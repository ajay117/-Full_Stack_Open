import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => {
    return response.data;
    // setPersons(response.data);
  });
};

const post = (obj) => {
  return axios
    .post(baseUrl, obj)
    .then((response) => response.data)
    .then((newContact) => newContact);
};

const deleteContact = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => console.log(response))
    .catch((err) => alert("An error while deleting from DB ", err));
};

const update = (id, obj) => {
  return axios
    .put(`${baseUrl}/${id}`, obj)
    .then((response) => response.data)
};

export default {
  getAll,
  deleteContact,
  post,
  update,
};
