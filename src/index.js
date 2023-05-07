const array = ["A", "B", "C"];

for (let i = 0; i < array.length; i++) {
  console.log("This is " + array[i]);
}

array.map((data) => console.log(`This is ${data}`));

const nArray = [1, 2, 3, 4, 5, 6, 7];

const filtered_nArray = nArray.filter((num) => num % 2 === 0);
console.log(filtered_nArray);

const dic = {
  name: "oyster",
  type: "seafood"
};
const { name, type } = dic;
console.log(`${name} is ${type}.`);

const array2 = [11, 22, 33, 44, 55];
const [N, K, ...data] = array2;
console.log(N, K, data);
