//your JS code here. If required.
let submit = document.getElementById("submit");
submit.addEventListener("click", formSubmit);
let tbody = document.getElementById("book-list");
let count = -1;
function formSubmit(e) {
  e.preventDefault();
  count++;
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let isbn = document.getElementById("isbn");

  let tr = document.createElement("tr");
  tr.id = "tr" + count;
  tr.innerHTML = `<td>${title.value}</td><td>${author.value}</td><td>${isbn.value}</td><td><button onClick="deleteNode(${count})" class="delete">X</button></td>`;
  tbody.appendChild(tr);
}

function deleteNode(id) {
  console.log(id);
  tbody.removeChild(document.getElementById("tr" + id));
}
