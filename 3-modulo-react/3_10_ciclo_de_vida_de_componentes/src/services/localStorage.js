const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  const data = localStorage.getItem(key);
  console.log(data);
  // return JSON.parse(data);
};

export default {
  get: get,
  set: set,
};
