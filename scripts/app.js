
/*-------------------------------- Constants --------------------------------*/
const audio = document.querySelector('#audio')
const buttons = document.querySelectorAll('.grid button')

/*-------------------------------- Functions --------------------------------*/
function playAudio(evt) {
    const buttonId = evt.target.id;

    if (buttonId === 'Work It') {
        audio.src = './sounds/work_it.wav';
      } else if (buttonId === 'Make It') {
        audio.src = './sounds/make_it.wav';
      } else if (buttonId === 'Do It') {
        audio.src = './sounds/do_it.wav';
      } else if (buttonId === 'Makes Us') {
        audio.src = './sounds/makes_us.wav';
      } else if (buttonId === 'Harder') {
        audio.src = './sounds/harder.wav';
      } else if (buttonId === 'Better') {
        audio.src = './sounds/better.wav';
      } else if (buttonId === 'Faster') {
        audio.src = './sounds/faster.wav';
      } else if (buttonId === 'Stronger') {
        audio.src = './sounds/stronger.wav';
      } else if (buttonId === 'More Than') {
        audio.src = './sounds/more_than.wav';
      } else if (buttonId === 'Hour') {
        audio.src = './sounds/hour.wav';
      } else if (buttonId === 'Our') {
        audio.src = './sounds/our.wav';
      } else if (buttonId === 'Never') {
        audio.src = './sounds/never.wav';
      } else if (buttonId === 'Ever') {
        audio.src = './sounds/ever.wav';
      } else if (buttonId === 'After') {
        audio.src = './sounds/after.wav';
      } else if (buttonId === 'Work Is') {
        audio.src = './sounds/work_is.wav';
      } else if (buttonId === 'Over') {
        audio.src = './sounds/over.wav';
      }
      
      audio.play()
      audio.volume = 0.1 

};

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', playAudio)
}); 


