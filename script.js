const ip = document.querySelector('input')
const addbtn = document.querySelector('button')
const container = document.querySelector('ol')


addbtn.addEventListener('click', () => {
    const txt = ip.value.trim();
    if(txt.length === 0) return
    const txtItem = document.createElement('input')
    txtItem.value = txt
    txtItem.disabled = true

    const item = document.createElement('li')
    const delbtn = document.createElement('button')
    const editbtn = document.createElement('button')
    const updatebtn = document.createElement('button')
    


    updatebtn.textContent = "update item"
    updatebtn.style.display = "none"
    editbtn.textContent = "edit item"
    delbtn.textContent = "delete item"



    delbtn.addEventListener('click', ()=>{
        item.remove()
    })

    editbtn.addEventListener('click', ()=>{
        editbtn.style.display = "none"
        updatebtn.style.display = "inline"
        txtItem.disabled = false
    })
    
    updatebtn.addEventListener('click', ()=>{
        if(txtItem.value.trim().length === 0){
            item.remove()
        }
        txtItem.disabled = true
        updatebtn.style.display = "none"
        editbtn.style.display = "inline"
    })



    item.appendChild(txtItem)
    item.appendChild(editbtn)
    item.appendChild(updatebtn)
    item.appendChild(delbtn)
    container.appendChild(item)
})