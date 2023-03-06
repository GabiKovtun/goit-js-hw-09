import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackKey = 'feedback-form-state';

form.addEventListener( 'input', throttle(() => {
  const savedValue = {
    emailInput: emailInput.value,
    messageInput: messageInput.value
    };
 localStorage.setItem(feedbackKey, JSON.stringify(savedValue));
   }, 500));

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const loadMessage = load(feedbackKey);
if (loadMessage) {
  emailInput.value = loadMessage.emailInput;
  messageInput.value = loadMessage.messageInput;
}


 const sendFeedback = e => {
  e.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Please fill in all fields');
  }
 
  console.log({
    emailInput: emailInput.value,
    messageInput: messageInput.value
    });

  form.reset();
  localStorage.removeItem(feedbackKey);
};

form.addEventListener('submit', throttle(sendFeedback, 500));
