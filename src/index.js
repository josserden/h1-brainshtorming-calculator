import Darkmode from 'darkmode-js';

import './sass/main.scss';
import refs from './js/refs';
import service from './service/service';
import listItem from './templates/list-item.hbs';

const { historyList, operationName, operationAmount, form } = refs;

service.renderFromLS(historyList, listItem, 'data');

const onHandleSubmit = event => {
  event.preventDefault();

  const nameValue = operationName.value.trim();
  const amountValue = Number(operationAmount.value);

  service.completeOperation(nameValue, amountValue);
  service.renderOperation(historyList, listItem);

  form.reset();
};

form.addEventListener('submit', onHandleSubmit);

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
