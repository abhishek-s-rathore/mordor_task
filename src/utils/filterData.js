export function filterBrowser(arr) {
let obj= {};

  arr.forEach((v, i) => {
    if (v.browser in obj) {
      obj[v.browser].push(v.countries);
    } else {
      obj[v.browser] = [v.countries];
    }
  });
  let newObj = {};

  for (let key in obj) {
    newObj[key] = new Array(...new Set(obj[key]));
  }

  console.log(newObj);

  return newObj;
}

export function filterCountries(arr) {
  let newArr = [];

  arr.forEach(v => {
    if (!newArr.includes(v.countries)) {
      newArr.push(v.countries);
    }
  });

  return newArr;
}

export function browserUsers(arr) {
  let obj= {};

  arr.forEach((v, i) => {
    if (v.browser in obj) {
      obj[v.browser] = obj[v.browser]+1;
    } else {
      obj[v.browser] = 1;
    }
  });
   return obj;
}


export function browserCountryUsers(arr) {
  let obj= {};

  arr.forEach((v, i) => {
    if (v.countries in obj) {
        if(obj[v.countries][v.browser]) {
          obj[v.countries][v.browser] = ++obj[v.countries][v.browser];
        }else {
          obj[v.countries][v.browser] = 1;
        } 
    }else{
      obj[v.countries] = {};
      obj[v.countries][v.browser] = 1;

    }
  });
   return obj;
}


