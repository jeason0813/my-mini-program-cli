export function cutNumber(number, tail = 2) {
  if (number.toString().indexOf('.') === -1) {
    return number.toFixed(tail);
  }
  const numberArr = number.toString().split('.');
  if (numberArr[1].length < tail) {
    return number.toFixed(tail);
  }

  numberArr[1] = numberArr[1].substring(0, tail);
  return numberArr.join('.');
}

export function formatMoney(money) {
  if (money < 0.01) {
    return '0.00';
  }
  if (money) {
    return `${cutNumber(money, 2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
  return '0.00';
}

export default {
  cutNumber,
  formatMoney
};
