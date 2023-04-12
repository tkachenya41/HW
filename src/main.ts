import { addDays } from 'date-fns';

const tomorrow = addDays(new Date(), 1);

const root = document.querySelector('#root');

if (!root) {
  throw new Error("Can't find root element!");
}

root.textContent = tomorrow.toISOString();
