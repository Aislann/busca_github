function pressionar(){
    
  document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const btn = document.querySelector("#submit");
        btn.click();
    }
})
}

export default pressionar