// cletinputTag = document.querySelectorAll('input');
// console.log(inputTag);
// const btn = document.querySelector('.log-in');
// let active = 'active';

// function inputList() {
//     for(var i = 0; i < inputTag.length; i++) {
//         inputTag[i].addEventListener('input',inputValue)
//     }
// }
// inputList();

// function inputValue() {
//     let idValue = document.querySelector('.tel').value;
//     let pwValue = document.querySelector('.password').value;
//     if(pwValue.length >= 1 && idValue.length >= 1) {
//         console.log(idValue);
//         console.log(pwValue);
//         btn.classList.add(active);
//     }else {
//         btn.classList.remove(active);
//     }
// }


// 2. logic

// let login = () => {
//   const active = "active";
//   const btn = document.querySelector('.log-in');
//   const id = document.querySelector(".tel");
//   const pw = document.querySelector(".password");

//   let inputList = () => {
//     id.addEventListener("keyup", Handler);
//     pw.addEventListener("keyup", Handler);
//   };

//   function Handler() {
//     // let idValue,pwValue 를 Handler 내부를 벗어나면 왜 안될까?
//     let idValue = document.querySelector(".tel").value;
//     let pwValue = document.querySelector(".password").value;
//     if (idValue.length !== 0 && pwValue.length !== 0) {
//         btn.classList.add(active);
//     }else {
//         btn.classList.remove(active);
//     }
//   }
//   inputList();
// };
// login();


// 3. logic

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



