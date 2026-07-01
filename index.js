const letBtn = document.getElementById("let")
let bookNum = 0 
let data = ''
const html =  document.getElementById("Ai-questions").innerHTML
const container = document.getElementById("Ai-questions")
letBtn.addEventListener("click" , async ()=>{
    const favorite = document.getElementById("favorite").value.trim()
    const mood = document.getElementById("mood").value.trim()
    const funny = document.getElementById("funOrSerious").value.trim()
    container.innerHTML = 'Loading...'
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
    bookNum += 1
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
    // I will start from here tomorrow 
    
})
