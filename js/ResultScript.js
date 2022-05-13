const select = () => {
  const isBreath = localStorage.getItem('breath');
  const isWristAngle = localStorage.getItem('wrist-angle');
  const isShoulder = localStorage.getItem('shoulder');
  const isSlower = localStorage.getItem('slower');
  const isBarGrab = localStorage.getItem('bar');

  const armpit = localStorage.getItem('armpit');
  const waist = localStorage.getItem('waist');
  const bench = localStorage.getItem('bench');


  let wrongList = document.getElementById('wrong-answers');
  let preferanceList = document.getElementById('wrong-answers');

  // Question result
  if (isBreath !== 'inhale'){
    wrongList.innerHTML +=
      '<div class="subtitle">- Breath</div>'+
      '<input type="radio" onclick="return(false);">inhale  --> X' +
      '<input type="radio" checked onclick="return(false);">exhale  --> O'
  }

  if (isWristAngle !== 'wrist_b'){
    wrongList.innerHTML +=
      '<div class="subtitle">-  Wrist Angle</div>'+
      '<label class="wrist_a">X</label>'+
      '<label class="wrist_b">O</label>'
  }

  if (isShoulder !== 'shoulder_down'){
    wrongList.innerHTML +=
      '<div class="subtitle">-  Shoulder</div>'+
      '<label class="shoulder_down">O</label>'+
      '<label class="shoulder_up">X</label>'
  }

  if (isSlower !== 'slower_a'){
    wrongList.innerHTML +=
      '<div class="subtitle">- Breath</div>'+
      '<input type="radio" onclick="return(false);">When the bar goes down  --> X' +
      '<input type="radio" checked onclick="return(false);">When the bar goes up  --> O'
  }

  if (isBarGrab !== 'bar_b'){
    wrongList.innerHTML +=
      '<div class="subtitle">-  Bar Grabbing Position</div>'+
      '<label class="bar_a">X</label>'+
      '<label class="bar_b">O</label>'
  }

  // Preferance question
  // armpit, waist, bench 값(1,2,3)에 따라 결과 표시
  if (armpit === 1){
    preferanceList.innerHTML += ''
  }
}

select()