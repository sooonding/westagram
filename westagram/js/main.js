function index() {
  const input = document.querySelector(".comment-input");

  const submit = document.querySelector(".comment-make");

  //붙이려는 함수 사용
  function make() {
    const ul = document.querySelector(".comment-ul");
    const li = document.createElement("li");
    li.className = "comment";

    const inputValue = input.value;
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.className = "your-name";
    span.className = "your-comment";
    p.innerHTML = "wecode";
    span.innerHTML = inputValue;
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(span);
    input.value = ''; // check;
    console.log(1);
  }
  //event
  input.addEventListener("keyup",enter);
  submit.addEventListener('click',click);

  function enter(event) {
    if (event.keyCode === 13) {
      make();
    }
  }
  function click() {
      make();
  }

}
index();
