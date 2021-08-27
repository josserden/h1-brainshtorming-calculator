export function generatedId() {
  return Math.round(Math.random() * 1e8).toString(16);
}

export const saveToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error: ', error);
  }
};

export const getFromLS = key => {
  try {
    const items = localStorage.getItem(key);

    return items ? JSON.parse(items) : null;
  } catch (error) {
    console.error('Error: ', error);
  }
};
