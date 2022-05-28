let url;
export const getData = async(url) => {
    
    try {
        let res = await fetch(url)
        let data = await res.json()   
        return data    
    } catch (error) {
        console.log(error)
    }
}   


export const displayData = (data, parentNode) => {

    data.forEach((el) => {

    let div = document.createElement("div")

    
    let title = document.createElement("h4")
    title.innerHTML = el.title

    if(el.statusvalue == true) {
        title.style.color ="green"
    }
    else{
        title.style.color = "red"
    }

    let delete_btn = document.createElement("button")
    delete_btn.innerHTML = "Delete"

    delete_btn.classList.add("btn", "btn-primary")

    delete_btn.addEventListener("click", async() => {
        console.log(el.id)

        try {
            
            let res = await fetch(`http://localhost:3004/tasks/${el.id}`, {
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json"
                }
            })
        
            let data1 = await res.json()
            console.log(data1)   
            } 
            catch (error) {
                console.log(error)    
            }
    })
    
    div.append(title, delete_btn)

    parentNode.append(div)
        
    });
    
}

