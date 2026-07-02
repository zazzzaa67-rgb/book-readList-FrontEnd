const letBtn = document.getElementById("let")
let bookNum = 0 
let data = ''
const container = document.getElementById("container")
const AiQues = document.getElementById("Ai-questions")
letBtn.addEventListener("click" , async ()=>{
    
        
    const favorite = document.getElementById("favorite").value.trim()
    const mood = document.getElementById("mood").value.trim()
    const funny = document.getElementById("funOrSerious").value.trim()
    if(favorite && mood && funny){
    container.style.display = 'flex'
    AiQues.style.display = 'none'
    container.innerHTML = '<p class="load">Loading...</p>'
    const res =  await fetch("https://book-backend-peach-five.vercel.app/api/chat" , {
        method : "POST",
        headers: {
            'Content-Type': 'application/json' 
        },
        body : JSON.stringify({
            favorite : favorite,
            userMood : mood,
            fun : funny 
        })
    })
    data = await res.json()
    renderBook(0)
    bookNum += 1}
    else{alert('Please fill in all the fields before continuing.')}
})
function renderBook(index){
        container.innerHTML = `
    
    <h1 class='title'>${data.books[index].title} (${data.books[index].author})</h1>
    <img src=${data.books[index].image} class='cover' alt='the book cover'>
    <p class='bookDes'>${data.books[index].paragraph}</p>
    <button id="next" class='btn'>Next</button>
    `
}
container.addEventListener('click' , (e)=>{
    if(e.target.id === 'next'){
        if(bookNum < data.books.length){
            renderBook(bookNum)
            bookNum += 1; }
    }
    if(e.target.id == 'next' && bookNum === data.books.length ){
        AiQues.style.display = 'flex'
        container.style.display = 'none'
        document.querySelectorAll('.respond').forEach((el)=>{
            el.value = ''
        })

        document.querySelector('main').innerHTML = html

    }
    
})
