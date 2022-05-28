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

    let taks = document.createElement("ul")
    
    let title = document.createElement("li")
    title.innerHTML = `${el.title}`

    if(el.statusvalue == true) {
        title.style.color ="green"
    }
    else{
        title.style.color = "red"
    }

    
    div.append(title)

    parentNode.append(div)
        
    });
    
}

