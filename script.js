// INDUSTRIES NEXT
const industriesNext = document.getElementById("industries-next");
const industriesBoxes = document.querySelectorAll("#industries-grid .box1");
let iIndex = 0;

industriesNext.onclick = () => {
  industriesBoxes.forEach((b,i)=>{
    b.style.display = (i>=iIndex && i<iIndex+3) ? "flex" : "none";
  });
  iIndex += 3;
  if(iIndex >= industriesBoxes.length) iIndex = 0;
};

// WHY CHOOSE NEXT
const chooseNext = document.getElementById("choose-next");
const chooseBoxes = document.querySelectorAll("#choose-grid .box2");
let cIndex = 0;

chooseNext.onclick = () => {
  chooseBoxes.forEach((b,i)=>{
    b.style.display = (i>=cIndex && i<cIndex+3) ? "flex" : "none";
  });
  cIndex += 3;
  if(cIndex >= chooseBoxes.length) cIndex = 0;
};


// FORM
document.getElementById("need-form").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Form submitted successfully!");
});




