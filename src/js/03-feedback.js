//----------------------------- Imports -----------------------------------------------------
import _ from 'lodash';
//----------------------------- Const setting ------------------------------------------------------
const keyFormLocalData = 'feedback-form-state';
//----------------------------- Object -------------------------------------------
const formData = {
  eMail: '',
  message: '',

  clear() {
    this.eMail = '';
    this.message = '';
  },
};
//------------------------------ Functions -----------------------------------------------------
function setLocalData(data) {
  try {
    localStorage.setItem(keyFormLocalData, JSON.stringify(data));
  } catch (error) {
    console.log('Błąd podczas zapisu');
    console.log(error);
  }
}
function getLocalData(key, data) {
  try {
    const serializedState = localStorage.getItem(key);
    const getData =
      serializedState === null ? undefined : JSON.parse(serializedState);
    data.eMail = getData.eMail;
    data.message = getData.message;
    return data;
  } catch (error) {
    if (length <= 0) {
      console.log('Brak danych w lokalnym magazynie');
    } else {
      console.error('Get state error: ', error.message);
    }
  }

  //data.eMail = 'dsdsds';
  //data.message = 'ok';
  //return data;
}
function removeLocalData(key) {
  localStorage.removeItem(key);
}
function completeForm(eMail, message) {
  form.email.value = eMail;
  form.message.value = message;
}
function getFormLocalData() {
  getFormLocalData(keyFormLocalData, formData);
  completeForm;
  completeForm(formData.email, formData.message);
}
function saveForm(eve) {
  formData.eMail = form.email.value;
  formData.message = form.message.value;
  setLocalData(formData);
}
function resetAllData() {
  removeLocalData(keyFormLocalData); // usuwanie danych formularza z localData
  formData.clear(); // czyszczenie danych
  completeForm(' ', ' '); // czyszczenie formularza
}
function sendForm(eve) {
  eve.preventDefault();
  console.log(formData); // wypisanie na konsoli email i message
  resetAllData();
}
//-----------------------------------------------------------------------------------

const form = document.querySelector('.feedback-form');

getLocalData(keyFormLocalData, formData);
completeForm(formData.eMail, formData.message);

form.addEventListener('input', _.throttle(saveForm, 1000));
form.addEventListener('submit', sendForm);
