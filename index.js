import {getData, displayData} from "./script/fetchScript.js";

let url = "http://localhost:3004/tasks"

let data = await getData(url)
console.log(data)


document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault()
    let title = document.getElementById("task").value

    console.log(title)

    let status = document.getElementById("checkbox_div").checked
    console.log(status)

    let body = {
        title,
        "statusvalue" : status
    }

    const postData = async() => {
        try {
            
        let res = await fetch('http://localhost:3004/tasks', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    
        let data1 = await res.json()
        console.log(data1)   
        } 
        catch (error) {
            console.log(error)    
        }
        
    }
    postData()

})

let main_div = document.getElementById("main")

displayData(data, main_div)

