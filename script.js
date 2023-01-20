// ES6 module
import axios from "axios";
import { add, subtract } from "./lib.js";
import lodash from 'lodash'

const result = subtract(22,8)
console.log(result)

const arr = [
  { name: "Roberto" },
  { name: "Joel" },
  { name: "Alex" },
  { name: "Claudi" },
]
const found = lodash.filter(arr, { name: "Alex" })
console.log(found)

// ES Build
axios.get("https://jsonplaceholder.typicode.com/todos")
.then(response => {
  console.log(response.data)
})