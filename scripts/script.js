const toggleSwitch = document.querySelector('input');
toggleSwitch.checked = false;
// true = annually
// false = monthly

const handleChange = () => {
  const priceValueP = document.querySelectorAll('.price-value');
  const priceValuePArray = Array.from(priceValueP);

  const price = {
    annually: ['199.99', '249.99', '399.99'],
    monthly: ['19.99', '24.99', '39.99'],
  };

  toggleSwitch.checked
    ? priceValuePArray.map((value, index) => {
        value.innerText = `${price.annually[index]}`;
      })
    : priceValuePArray.map((value, index) => {
        value.innerText = `${price.monthly[index]}`;
      });
};

toggleSwitch.addEventListener('change', handleChange);
