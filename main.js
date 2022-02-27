// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName('like-glyph');

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', (e) => {
    mimicServerCall(e)
      .then(() => {
        if (hearts[i].innerText === FULL_HEART) {
          hearts[i].innerText = EMPTY_HEART;
          hearts[i].class = 'activated-heart';
        } else {
          (hearts[i].innerText = FULL_HEART)(
            (hearts[i].class = 'activated-heart')
          );
        }
      })
      .catch((error) => {
        const modal = document.getElementById('modal');
        modal.innerHTML = error.message;
        modal.className = '';
        setTimeout(() => (modal.className = 'hidden'), 3000);
      });
    // console.log(e.target);
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
