// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let said_by = document.querySelector('.said-by');

// arrays of quotes

const quotes = [{
    quote: '"If you can dream it, you can do it."',
    said_by: 'Walt Disney'
}, {
    quote: '"Life is 10% what happens to you and 90% how you react to it."',
    said_by: 'Charle R. Swindoll'
}, {
    quote: '"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."',
    said_by: 'Helen Keller'
}, {
    quote: '"Good, better, best. Never let it rest. Until your good is better and your better is best."',
    said_by: 'StaticRange.Jerome'
}, {
    quote: '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy."',
    said_by: 'Norman Vincent Peale'
}, {
    quote: '"It always seems impossible until its done."',
    said_by: 'Nelson Mandela'
}, {
    quote: '"Our greatest weakness lies in giving up. The succeed is always to try just one more time."',
    said_by: 'Thomas A. Edison'
}, {
    quote: '"It does not matter how slowly you go as long as you do not stop."',
    said_by: 'Confucius'
}, {
    quote: '"If you are going through hell, keep going."',
    said_by: 'Winston Churchill'
}, {
    quote: '"When something is important enough, you do it even if the odds are not in your favor."',
    said_by: 'Elon Musk'
}];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    said_by.innerText = quotes[random].said_by;
})