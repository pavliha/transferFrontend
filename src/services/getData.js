import * as constants from '../constants/constants';

const getData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${constants.API_URL}${url}`, true);
    // xhr.withCredentials = true;
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      const hasError = xhr.status < 200 || xhr.status >= 300;
      if (hasError) {
        reject(JSON.parse(xhr.responseText));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = () => {
      throw new Error(`${xhr.status}: ${xhr.statusText}`);
    };

    xhr.send();
  });
};

export default getData;

export function getFakeData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:3001${url}`, true);
        // xhr.withCredentials = true;
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            const hasError = xhr.status < 200 || xhr.status >= 300;
            if (hasError) {
                reject(JSON.parse(xhr.responseText));
            } else {
                resolve(JSON.parse(xhr.responseText));
            }
        };
        xhr.onerror = () => {
            throw new Error(`${xhr.status}: ${xhr.statusText}`);
        };

        xhr.send();
    });
}