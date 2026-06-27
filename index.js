const letBtn = document.getElementById("let")
letBtn.addEventListener("click" , async ()=>{
    const favorite = document.getElementById("favorite").value.trim()
    const mood = document.getElementById("mood").value.trim()
    const funny = document.getElementById("funOrSerious").value.trim()
    const res =  await fetch("/api/chat" , {
        method : "POST",
        headers:"content_type : jsonObject",
        body : {
            favorite : favorite,
            userMood : mood,
            fun : funny 
        }
    })
    const data = await res.json()
    console.log(data)

})