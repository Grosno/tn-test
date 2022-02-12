const inputMessage = document.querySelector('.content__contacts__input');
const chatArea = document.querySelector('.content__contacts__chat-area');
const incomingMessage = document.querySelector('.buttons__incoming');
const outcomingMessage = document.querySelector('.buttons__outcoming');

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const EMPTY_STRING = '';

/*----------------------------------------События----------------------------------------*/
inputMessage.addEventListener('input', (event) => {
  inputMessage.value = event.target.value;
})

incomingMessage.addEventListener('click', () => {
  if (inputMessage.value !== EMPTY_STRING) {
    addMessageToChat(inputMessage.value, 'incoming');
    inputMessage.value = null;
  }
})

outcomingMessage.addEventListener('click', () => {
  if (inputMessage.value !== EMPTY_STRING) {
    addMessageToChat(inputMessage.value, 'outcoming');
    inputMessage.value = null;
  }
})

menu.addEventListener('click', (event) => {
  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    item.classList.remove('active');
  }
  event.target.classList.add('active');
})

/*----------------------------------------Фукнции----------------------------------------*/
function addMessageToChat(inputMsg, key) {
  if (inputMsg !== null) {
    const element = document.createElement("div");
    const elementAvatar = document.createElement("div");
    const elementMessage = document.createElement("span");

    elementMessage.innerText = inputMsg;
    element.className = (key === 'incoming') ? 'incoming-message' : 'outcoming-message';
    elementAvatar.className = (key === 'incoming') ? 'incoming-message__avatar' : 'outcoming-message__avatar';
    elementMessage.className = (key === 'incoming') ? 'incoming-message__text' : 'outcoming-message__text';

    element.append(elementAvatar, elementMessage);
    chatArea.appendChild(element);
  }
}
