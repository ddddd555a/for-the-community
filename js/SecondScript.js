//local stroage insert
const insert = (key, value) => {
  localStorage.setItem(key, value);
  console.log(key, value)
}

//local storage select
const select = (key) => {
  console.log('select')
  const test = localStorage.getItem(key);

  console.log(key, test)

  alert(test);
}

const resultValidation = () => {

  const isBreath = localStorage.getItem('breath');
  const isWristAngle = localStorage.getItem('wrist-angle');
  const isShoulder = localStorage.getItem('shoulder');
  const isSlower = localStorage.getItem('slower');
  const isBarGrab = localStorage.getItem('bar');

  if (!isBreath || !isWristAngle || !isShoulder ||
      !isSlower || !isBarGrab){
        
    alert('There is unselected question');
    return false;
  }

  const armpitAngle = document.getElementById('armpit-range').value;
  const waistArch = document.getElementById('waist-range').value;
  const benchAngle = document.getElementById('bench-range').value;

  localStorage.setItem('armpit', armpitAngle);
  localStorage.setItem('waist', waistArch);
  localStorage.setItem('bench', benchAngle);

  location.href='ResultPage.html'
}

const resetRadio = () => {
  
}