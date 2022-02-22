import axios from "axios";
const API = axios.create({ baseURL: "https://district4.herokuapp.com/" });
// const API = axios.create({ baseURL: "http://localhost:5000/" });

export const fetchMembers = () => API.get("/members");
export const createMember = (newMember) => API.post(`/members/add`, newMember);
export const updateMember = (id, updateMember) =>
  API.patch(`/members/update/${id}`, updateMember);
export const deleteMember = (id) => API.delete(`/members/${id}`);
export const fetchSingleMember = (id) => API.get(`/members/viewmember/${id}`);

export const signin = (formData) => API.post("/users/signin", formData);
export const signup = (formData) => API.post("/users/signup", formData);
