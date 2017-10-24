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
        reject(new Error(`${xhr.status}: ${xhr.statusText}`));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = () => {
      console.log('error');
    };
  });
};

export default sendData;
