const sendData = (url, method, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      const isError = (xhr.status + '')[0] !== '2';
      if (isError) {
        reject(new Error(`${xhr.status}: ${xhr.statusText}`));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    }
  });
}

export default sendData;