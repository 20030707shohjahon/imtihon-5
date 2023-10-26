let forma = document.querySelector('.reges__hero__box__form');
let f_name = document.querySelector('.firstname');
let l_name = document.querySelector('.lastname');
let u_name = document.querySelector('.username');
let pas_1 = document.querySelector('.pasword');
let pas_2 = document.querySelector('.confrim');
let err_1 = document.querySelector('.validad_1');
let err_2 = document.querySelector('.validad_2')
let err_3 = document.querySelector('.validad_3')
let err_4 = document.querySelector('.validad_4')
let err_5 = document.querySelector('.validad_5')
forma.addEventListener('submit', ((e) => {
    e.preventDefault()
    f_name.value = '';
    l_name.value = ''
    u_name.value = ''
    pas_1.value = ''
    pas_2.value = ''
    forma.reset();
    if (f_name.value.length > 5) {
        // err_1.classList.remove('display_block')
    } else {
        err_1.classList.add('display_block')
    }
    if (l_name.value.length > 5) {
        // err_2.classList.remove('display_block')
    } else {
        err_2.classList.add('display_block')
    }
    if (u_name.value.length > 5) {
        // err_3.classList.remove('display_block')
    } else {
        err_3.classList.add('display_block')
    }
    if (pas_1.value.length > 8) {
        // err_4.classList.remove('display_block')
    } else {
        err_4.classList.add('display_block')
    }
    if (pas_1 == pas_2) {
        // err_5.classList.remove('display_block')
    } else {
        err_5.classList.add('display_block')
    }
    // let nev = document.createElement('di')
}))