// const ROUTE = "https://chicmi-api.herokuapp.com/api/v1";
const ROUTE = "http://localhost:3001/api/v1";

const headers = {
  Accepts: "application/json, text/plain",
  "Content-Type": "application/json"
};

export function loginUser(data) {
  return fetch(`${ROUTE}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function signupUser(data) {
  return fetch(`${ROUTE}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function fetchCurrentUser() {
  return fetch(`${ROUTE}/current_user`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ token: localStorage.token })
  }).then(res => res.json());
}

export function addList(name, listIds, userId) {
  return fetch(`${ROUTE}/lists`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name: name, listIds: listIds, userId: userId })
  }).then(res => res.json());
}

export function deleteList(id) {
  return fetch(`${ROUTE}/lists/${id}`, {
    method: "DELETE",
    headers: headers,
    body: id
  }).then(res => res.json());
}
