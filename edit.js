import { getData, displayData} from "./script/fetchScript.js";


let data = JSON.parse(localStorage.getItem("task_id"))
console.log(data)

let url = `http://localhost:3004/tasks/${data}`



let d = await getData(url)
console.log(d)

let main_div = document.getElementById("main")

displayData(d, main_div)