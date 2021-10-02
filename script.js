const manu = document.querySelector(".manu-list");
const manuBtn = document.querySelector(".manu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const body = document.querySelector("body");

manuBtn.onclick = () => {
  manu.classList.add("active");
  manuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
};
cancelBtn.onclick = () => {
  manu.classList.remove("active");
  manuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
};

// drop down manu
function toggleHide(){
  let up =document.getElementById('up');
  let para = document.getElementById('para'); 
  if(para.style.display != 'block'){
    para.style.display = 'block';
  }
  else{
    para.style.display = 'none';
  }
}