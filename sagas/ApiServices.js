import axios from "axios";
export const getApiList = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  // return [
  //   { id: 1, title: "KKK", completed: "ss" },
  //   { id: 1, title: "AAA", completed: "ss" },
  //   { id: 1, title: "BBB", completed: "ss" },
  //   { id: 1, title: "CCC", completed: "ss" },
  //   { id: 1, title: "DDD", completed: "ss" }
  // ];
};
