const getData = (url) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState != 4) return;
      if (xhr.status !== 200) {
        reject(new Error(`${xhr.status}: ${xhr.statusText}`));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    }
  });
}

export default getData;