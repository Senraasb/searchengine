alert("Hello, welcome to Odipira your personalised web engine. It's brand new and together we can \
make this better! So stayed tuned.")

   var quotes = [ 
'Don’t spend time beating on a wall, hoping to transform it into a door. — Coco Chanel',
'Creativity is intelligence having fun. — Albert Einstein',
'Anyone who has ever made anything of importance was disciplined. — Andrew Hendrixson',
'Always keep your eyes open. Keep watching. Because whatever you see can inspire you. — Grace Coddington',
'If the plan doesn\'t work, change the plan, but never the goal.',
'For time and the world do not stand still. Change is the law of life. And those who look only to the past or the present are certain to miss the future. -John F Kennedy',
'When you visualize, then you materialize. If you’ve been there in the mind, you’ll go there in the body." - Dr. Dennis Waitley',
'You manifest what you believe, not what you want. - Sonia Ricotti',
'The future is not something we enter. The future is something we create. - Leonard Sweet',
];  
function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('button').innerHTML = quotes[randomNumber]; 

}



