let login = () => {
  const active = "active";
  const btn = document.querySelector('.log-in');
  const id = document.querySelector(".tel");
  const pw = document.querySelector(".password");
  const p = document.createElement('p');
  const footer = document.querySelector('footer');

  let inputList = () => {
    id.addEventListener("keyup",Handler);
    pw.addEventListener("keyup",Handler);
  };

  function Handler() {
    // let idValue,pwValue 를 Handler 내부를 벗어나면 왜 안될까?
    let idValue = document.querySelector(".tel").value;
    let pwValue = document.querySelector(".password").value;

    if (idValue.length < 1) {
        footer.prepend(p);
        p.innerHTML = '아이디를 입력하세요.';
        btn.classList.remove(active);
    }else if (pwValue.length < 1){
        footer.prepend(p);
        p.innerHTML = '비밀번호를 입력하세요.';
        btn.classList.remove(active);
    }else if(idValue !== 0 && pwValue !== 0) {
        btn.classList.add(active);
        p.innerHTML = '';
    }
  }
  inputList();
};
login();



