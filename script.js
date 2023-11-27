let enterButton = document.getElementById("enter");

let input = document.getElementById("userInput");

let ul = document.querySelector("ul");

function getInputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function createCompletedItem(element) {
    // Create a new list item
    let newItem = document.createElement("li");

    // Copy the text from the original item and append '(completed)' to it
    newItem.textContent = element.textContent + " (completed)";

    // Change the color to gray
    newItem.style.color = "gray";

    // Append the new item to the end of the list
    document.querySelector("ul").appendChild(newItem);
  }

  li.addEventListener("dblclick", function (event) {
    createCompletedItem(event.target);
  });

  function strikethrough(element) {
    if (element.style.textDecoration === "line-through") {
      element.style.textDecoration = "none";
    } else {
      element.style.textDecoration = "line-through";
    }
  }

  li.addEventListener("dblclick", function (event) {
    strikethrough(event.target);
  });

  let deleteBtn = document.createElement("button");

  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.toggle("delete");
  }
}

function addListAfterClick() {
  if (getInputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (getInputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}
enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
