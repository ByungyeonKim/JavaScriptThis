'use strict';
// https://youtu.be/PAr92molMHU?list=WL
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this

let someone = {
  name: 'Byungyeon',
  whoAmI: function () {
    console.log(this);
  },
};

someone.whoAmI();

let myWhoAmI = someone.whoAmI;
// non use strict mode에선 window가 log 됨.
myWhoAmI();

let btn = document.querySelector('.btn');
// 두개의 리스너 모두 button이 호출된다.
btn.addEventListener('click', someone.whoAmI);
btn.addEventListener('click', myWhoAmI);

let btn2 = document.querySelector('.btn2');
let bindedWhoAmI = myWhoAmI.bind(someone);
// 이런 경우 bind로 고정시켜줬기 때문에 someone이 호출된다.
btn2.addEventListener('click', bindedWhoAmI);
