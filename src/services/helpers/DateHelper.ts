export function formatDate(date: string): string {
  return date.split('T')[0].split('-').reverse().join('/');
}

export function formatHour(date: string): string {
  return date.split('T')[1].slice(0, 5);
}

const MonthArray = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const WeekDayArray = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export function getMonthName(date: string): string {
  const monthNumber = formatDate(date).split('/')[1];

  return MonthArray[parseInt(monthNumber, 10) - 1];
}

export function getWeekDayName(date: string): string {
  const objectDate = new Date(date);
  const weekDay = objectDate.getDay();

  return WeekDayArray[weekDay];
}

export function getFormatterSectionOrderDate(date: string): string {
  const day = formatDate(date).split('/')[0];
  const year = formatDate(date).split('/')[2];

  const weekDay = getWeekDayName(date);

  const month = getMonthName(date);

  return `${weekDay} • ${day} de ${month} de ${year}`;
}
