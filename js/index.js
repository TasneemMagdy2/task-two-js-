
    var qoutes=[
      {
        quote:`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        author:`― Marilyn Monroe`
      }
      ,{
        quote:`“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”`,
        author:`― William W. Purkey`
      },{
        quote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        author:`― Dr. Seuss`

      },
      {
        quote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        author:`― Dr. william`

      },
      {
        quote:`“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”`,
        author:`― Dr― John Green, The Fault in Our Stars. Seuss`

      },
      {
        quote:`“The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”`,
        author:`― Elie Wiesel`

      },
      {
        quote:`“Love all, trust a few,
Do wrong to none: be able for thine enemy
Rather in power than use; and keep thy friend
Under thy own life's key: be check'd for silence,
But never tax'd for speech.”`,
        author:`William Shakespeare, All's Well That Ends Well`

      },

    ]
  
    
    var qoute= document.getElementById('quote');
   var author= document.getElementById('author');
  
//    function displayQoutes() {
    
 
    
//     var randomQuote = qoutes[Math.floor(Math.random() * qoutes.length)];
//        console.log(Math.floor(Math.random() * qoutes.length));
       

// console.log(randomQuote);


   
    
    
  
//     qoute.innerHTML= `${randomQuote.quote}`;
//     author.innerHTML = ` ${randomQuote.author}`;
   
    

 
 
 















       
    
// }



// Array of quotes


// Set to store unique indices (used quotes)
let usedIndices = new Set();

// Function to display a random quote without repetition
function displayQoutes() {
    // Check if all quotes have been used
    if (usedIndices.size === qoutes.length) {
        console.log("All quotes have been used.");
        return;  // No more quotes left to display
    }

    // Generate a random index
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * qoutes.length);
    } while (usedIndices.has(randomIndex));  // Ensure the index is not already used

    // Add the index to the Set of used indices
    usedIndices.add(randomIndex);

    // Select the random quote using the random index
    const randomQuote = qoutes[randomIndex];
    console.log("Random Index:", randomIndex);  // Log the random index

    // Display the random quote and author in HTML
  
    qoute.innerHTML = `${randomQuote.quote}`;
    author.innerHTML = `${randomQuote.author}`;
}



