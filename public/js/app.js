const weatherForm = document.querySelector('form')
const userinput = document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')



weatherForm.addEventListener('submit',(event)=>{
    messageTwo.textContent = 'loading...'
    event.preventDefault()
    console.log(userinput.value)

    fetch('/weather?address=' + userinput.value ).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageTwo.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast                
            }
        }) 
    })
    
})

