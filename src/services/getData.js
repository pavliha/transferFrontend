const getData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // xhr.withCredentials = true;
    xhr.send();

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

export default getData;
