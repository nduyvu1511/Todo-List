const inputSearch = document.querySelector('.input-search')
const inputBtn = document.querySelector('.input-btn')
const todoList = document.querySelector('.todo-list')
const choose = document.getElementById('select')
const clear = document.getElementById('clear')

inputBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(inputSearch.value!= "") {
        const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-div')
    
    const todoItem = document.createElement('li')
    todoItem.classList.add('todo-item')
    todoItem.innerText = inputSearch.value
    todoDiv.appendChild(todoItem)

    // Edit button
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.innerHTML= '<i class ="ti-pencil-alt"></i>'
    todoDiv.appendChild(editBtn)

    // complete button
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete-btn')
    completeBtn.innerHTML= '<i class ="ti-check-box"></i>'
    todoDiv.appendChild(completeBtn)

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-btn')
    removeBtn.innerHTML= '<i class ="ti-trash"></i>'
    todoDiv.appendChild(removeBtn)

    todoList.appendChild(todoDiv)
    inputSearch.value = ""
    }
    else {
        var noti = document.querySelector('.notify')
        noti.style.display = 'block'
        inputSearch.addEventListener('keyup', e => {
            if(inputSearch.value !== "") {
                noti.style.display = 'none'
            }
        })
        setTimeout(() => {
            noti.style.display = 'none'
        }, 5000);
    }
})

todoList.addEventListener('click', (e) => {
    var value = e.target
    if(value.classList[0] === 'edit-btn') {
        result = value.parentElement.firstChild
            inputSearch.value = result.innerText
            inputBtn.addEventListener('click', e => {
                result.parentElement.remove()
                result.innerText = inputSearch.value
            })
            
    }
    if(value.classList[0] === 'complete-btn') {
        value.parentElement.firstChild.classList.toggle('completed')
        value.parentElement.classList.toggle('blur')
    }

    if(value.classList[0] === 'remove-btn') {
        value.parentElement.classList.add('fall')
        value.parentElement.addEventListener('transitionend', e => {
            value.parentElement.remove()
        })
    }
   
})

choose.addEventListener('click', e => {
    const todoItem = todoList.children
    for(var i = 0; i<todoItem.length; i++) {
        
        if(e.target.value == 1) {
            todoItem[i].style.display = 'flex'
        }
        else if(e.target.value == 2) {
           if( todoItem[i].firstChild.classList[1] == 'completed') {
               todoItem[i].style.display = 'flex'
           }else{
               todoItem[i].style.display = 'none'
           }

        }
        else {
            if( todoItem[i].firstChild.classList.contains('completed')) {
                todoItem[i].style.display = 'none'
            }else{
                todoItem[i].style.display = 'flex'
            }
        }
    }
})

clear.addEventListener('click', e => {
    todoItem = todoList.children
    for(item of todoItem) {
        console.log(item)
        item.classList.add('fall')
        item.addEventListener('transitionend', e => {
            e.target.remove()
        })
    }
})


