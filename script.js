form.onclick = function(event) {
    event.target.style.backgroundColor = 'maroon';
  
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName);
      event.target.style.backgroundColor = ''
    }, 0);
};



// for(let elem of document.querySelectorAll('#outline')) {
//     elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`),true); // if true, then the handler is set on the capturing phase. 
//     elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`)); // if false (default), then the handler is set on the bubbling phase. 
// }


