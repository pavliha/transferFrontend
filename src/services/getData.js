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
        reject(new Error(`${xhr.status}: ${xhr.statusText}`));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });
};

export default getData;
