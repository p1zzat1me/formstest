const btnFin = document.getElementById('finish');
const btnOne = document.querySelector('.q1');
const btnTwo = document.querySelector('.q2');
const btnThree = document.querySelector('.q3');
const btnFour = document.querySelector('.q4');
const btnFive = document.querySelector('.q5');

const check = function() {
    let arrBool = [];
  btnOne.value == '4' || btnOne.value === 'four' ? arrBool.push(true) : arrBool.push(false);
  btnTwo.value === '6' ||  btnTwo.value === 'six' ? arrBool.push(true) : arrBool.push(false);
  btnThree.value === '10' || btnThree.value === 'ten' ? arrBool.push(true) : arrBool.push(false);
  btnFour.value === '120' || btnFour.value === 'one hundred twenty' ? arrBool.push(true) : arrBool.push(false);
  btnFive.value === '3' || btnFive.value === 'three' ? arrBool.push(true) : arrBool.push(false);
  return arrBool;
  
}

btnFin.addEventListener('click', function(){
    const b = check();
    let cor = 0;
    for (let i =0; i<b.length;i++){
        switch (b[i]){
            case true:
                alert (`Question ${i+1} is correct`);
                cor++;
                break;
            case false:
                alert (`Question ${i+1} is incorrect`);
                break;
        }
    }
    alert(`Your grade is ${cor}/5`);
});


