let quoteData = [
{
    quote:"You are the shuckiest shuck faced shuck in the world!",
    author:"James Dashner"
},
{
    quote:"I'm about as intimidating as a butterfly",
    author:"Dan Howell"
},
{
    quote:"A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
    author:"Abraham Maslow"
},
{
    quote:"Insane means fewer cameras!",
    author:"Ally Carter"
},
{
    quote:"Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!",
    author:"Rick Riordan"
},
{
    quote:"That proves you are unusual,returned the Scarecrow and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.",
    author:"L.Frank Baum"
}
]

let quotecon = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('getQuote')
btn.addEventListener('click',getQuote);

// function getQuote(){
//     let x = Math.floor(Math.random()*quoteData.length);
//     quote.innerText = quoteData[x].quote;
//     author.innerText = "--"+" "+ quoteData[x].author;
// }

async function getQuote(){
    let response =await fetch('https://api.quotable.io/random');
    let quote = await  response.json();
    console.log(quote);
    quotecon.innerText = quote.content;
    author.innerText = quote.author;

}


