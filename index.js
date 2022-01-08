console.log("Drag and Drop!!");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.querySelectorAll(".whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("dragstart has been triggerred");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0); //0 means do this when everything is executed
});

imgBox.addEventListener("dragend", (e) => {
  console.log("dragend has been triggerred");
  e.target.className = " imgBox";
});

for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover has been triggerred");
  });

  whiteBox.addEventListener("dragenter", (e) => {
    console.log("dragenter has been triggerred");
    e.target.className += " dashed";
  });

  whiteBox.addEventListener("dragleave", (e) => {
    console.log("dragleave has been triggerred");
    e.target.className = " whiteBox";

  });

  whiteBox.addEventListener("drop", (e) => {
    console.log("drop has been triggerred");
    e.target.append(imgBox);
    
  });
}
