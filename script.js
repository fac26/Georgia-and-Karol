addEventListener("input", messageLength) 

function messageLength(event) {
  let messageBox = document.getElementById("message-box").value;
  let charLimit = document.getElementById("char-limit");

  charLimit.innerHTML = messageBox.length + "/200";
  if (str.length > charLimitValue) {
    style.borderColor = "red";
  }
}