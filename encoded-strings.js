function paramsToObject(entries) {
  const result = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

const urlDecode = function (text) {
  const urlParams = new URLSearchParams(text);
  const entries = urlParams.entries(); //returns an iterator of decoded [key,value] tuples
  const params = paramsToObject(entries); //{abc:"foo",def:"[asf]",xyz:"5"}
  return params;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
