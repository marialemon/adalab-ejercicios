function Api() {
  return fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => data.result);
}

export default Api;
