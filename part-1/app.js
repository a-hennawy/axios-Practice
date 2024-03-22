let baseURL = "http://numbersapi.com/";

//part 1.a

// async function getRandomFact(num) {
//   let randomRES = await axios.get(`${baseURL}${num}`);
//   console.log(randomRES.data);
//   return randomRES.data;
// }

// getRandomFact(21);

//part 1.b

async function getMultipleFacts(min, max) {
  let multipleData = await axios.get(`${baseURL}${min}..${max}?json`);
  //   console.log(multipleData.data);
  let facts = multipleData.data;
  //   console.log(facts[1]);
  return facts;
}

getMultipleFacts(1, 4).then((data) => {
  for (let fact in data) {
    $("#1-b").append(`<li>${data[fact]}</li>`);
    // console.log(data[fact]);
  }
});

//part 1.c

let favoriteNums = [23, 45, 6, 2];

async function getFavoriteNumFact(numArr) {
  let promises = [];
  for (let num in numArr) {
    console.log(numArr[num]);
    promises.push(axios.get(`${baseURL}${numArr[num]}`));
  }
  let numberData = await Promise.all(promises);
  numberData.forEach((el) => {
    $("#1-c").append(`<li>${el.data}</li>`);
    console.log(el.data);
  });
  //   console.log(numberData);
}

getFavoriteNumFact(favoriteNums);
