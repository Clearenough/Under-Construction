export default function splitDate(number) {
  const days = Math.floor(number / (1000 * 60 * 60 * 24));
  const hours = Math.floor((number % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((number % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((number % (1000 * 60)) / 1000);
  return [days, ':', hours, ':', minutes, ':', seconds];
}
