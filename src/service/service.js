import { generatedId, saveToLS, getFromLS } from '../helpers/helpers';

const service = {
  operation: [],

  createOperation(description, amount) {
    return {
      id: generatedId(),
      description,
      amount,
    };
  },

  completeOperation(description, amount) {
    this.operation.push(this.createOperation(description, amount));

    saveToLS('data', this.operation);

    return this.operation;
  },

  renderOperation(refs, template) {
    return (refs.innerHTML = template(this.operation));
  },

  renderFromLS(refs, template, key) {
    const saveData = getFromLS(key);

    if (!saveData) {
      return;
    }

    this.operation = saveData;

    this.renderOperation(refs, template);
  },
};

export default service;
