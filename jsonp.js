function jsonp(url, callback) {
    const script = document.createElement('script');
    script.src = `${url}?callback=${callback}`;
    document.body.appendChild(script);
}