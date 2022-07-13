const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value')

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

incrementBtn.addEventListener('click', () => {
    counter.increment()
    valueEl.textContent = counter.counterValue
})

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});