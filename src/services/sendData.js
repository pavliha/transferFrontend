const sendData = (url, method, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      const hasError = (xhr.status + '')[0] !== '2';
      if (hasError) {
        reject(JSON.parse(xhr.responseText));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = () => {
      throw new Error(`${xhr.status}: ${xhr.statusText}`);
    };
  });
};

export default sendData;
