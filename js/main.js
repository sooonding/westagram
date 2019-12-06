function index() {
  const input = document.querySelector(".comment-input");
  // 제출 버튼
  const submit = document.querySelector(".comment-make");

  //붙이려는 함수 사용
  function make() {
    const ul = document.querySelector(".comment-ul")
    const li = document.createElement("li");
    const inputValue = input.value;
    const p = document.createElement("p");
    const span = document.createElement("span");
    //삭제 버튼
    const delBtn = document.createElement('button');

    delBtn.className = 'del';
    li.className = "comment";
    p.className = "your-name";
    span.className = "your-comment";
    p.innerHTML = "hong";
    span.innerHTML = inputValue;
    delBtn.innerHTML = '❌';
    delBtn.style.border = 'none';

    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(delBtn);

    input.value = ''; // check;
    console.log(1);

    delBtn.addEventListener('click',function(){
      ul.removeChild(li);
    })
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
