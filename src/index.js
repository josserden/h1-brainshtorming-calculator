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
