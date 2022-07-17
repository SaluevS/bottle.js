//1
function generateSingleStanza(number) {
  for (number = 99; number > 0; number--) {
    if (number === 14) {
      console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
    } else if (number === 13) {
      console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
    } else if (number === 12) {
      console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
    } else if (number === 11) {
      console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
    } else if (number === 10) {
      console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
    } else if (number === 1) {
      console.log(`${number} бутылка пива на стене, ${number} бутылка пива!
        Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
    } else if (number % 10 === 1) {
      console.log(`${number} бутылка пива на стене, ${number} бутылка пива!
         Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
    } else if (number % 10 === 2) {
      console.log(`${number} бутылки пива на стене, ${number} бутылки пива!
         Возьми одну, пусти по кругу, ${number - 1} бутылка пива на стене!`);
    } else if (number % 10 === 3) {
      console.log(`${number} бутылки пива на стене, ${number} бутылки пива!
         Возьми одну, пусти по кругу, ${number - 1} бутылки пива на стене!`);
    } else if (number % 10 === 4) {
      console.log(`${number} бутылки пива на стене, ${number} бутылки пива!
         Возьми одну, пусти по кругу, ${number - 1} бутылки пива на стене!`);
    } else if (number % 10 === 5) {
      console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${number - 1} бутылки пива на стене!`);
    } else {
      console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
         Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
    }
  }
}
generateSingleStanza();

//2

