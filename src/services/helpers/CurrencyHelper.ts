export function formatterCurrency(value: number): string {
  const casas = 2;
  const operation = Math.pow(10, casas);
  const newNum = Math.floor(value * operation) / operation;

  let str = newNum.toString();

  str = str.replace('.', ',');
  str = str.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  if (newNum % 1 === 0 || newNum === 0) str = `${str},00`;

  const newStr = str.split(',');

  if (newStr.length > 1 && newStr[1].length < 2) {
    str = `${str}0`;
  }

  return str;
}
