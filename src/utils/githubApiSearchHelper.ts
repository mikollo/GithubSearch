import { endpoint } from "../constants";

const requests: XMLHttpRequest[] = [];

export default function githubApiSearchHelper(query: string) {
  return new Promise((resolve, reject) => {
    requests.forEach(prevRequest => prevRequest.abort());
    const request = new XMLHttpRequest();
    requests.push(request);
    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        resolve(JSON.parse(request.responseText).items);
      } else {
        let errorMessage = "Unknown error occured";
        if (request.status !== 0) {
          try {
            errorMessage = JSON.parse(request.responseText).message;
          } catch (e) {
            console.error(e);
          }
          reject(errorMessage);
        }
      }
    };
    request.open("GET", endpoint + `/search/repositories?q=${query}`);
    request.send();
  });
}
