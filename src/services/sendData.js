import * as constants from '../constants/constants';

const sendData = (url, method, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${constants.API_URL}${url}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
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

    xhr.send(JSON.stringify(data));
  });
};

export default sendData;
