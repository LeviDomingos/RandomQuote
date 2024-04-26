const quote =
  {
    message:["If you change the way you look at things, the things you look at change.", "THE WAY I SEE IT, IF YOU WANT THE RAINBOW, YOU GOTTA PUT UP WITH THE RAIN.", "THE PURPOSE OF OUR LIVES IS TO BE HAPPY.", "MANY OF LIFE'S FAILURES ARE PEOPLE WHO DID NOT REALIZE HOW CLOSE THEY WERE TO SUCCESS WHEN THEY GAVE UP.", "Not how long, but how well you have lived is the main thing.", "If life were predictable it would cease to be life, and be without flavor.", "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it", "In order to write about life first you must live it.", "The big lesson in life, baby, is never be scared of anyone or anything"],
    author:["- Wayne Dyer -", "-DOLLY PARTON-", "- DALAI LAMA -", "- Thomas EDISON -", "- Seneca -","- Eleanor Roosevelt -",  "- Henry Ford -", "- Ernest Hemingway -", "- Frank Sinatra -" ]
  }

  let nextQuote = 0;
$(document).ready(function() {
    $("#display-text").text(quote.message[nextQuote]);

    $("#author").text(quote.author[nextQuote]);

    function genarateNextquote() {
        nextQuote++;
        if(nextQuote >= 0  && nextQuote <= quote.message.length -1) {
            $("#display-text").text(quote.message[nextQuote]);
            $("#author").text(quote.author[nextQuote]);
            nextQuote++;
        }
        else {
            nextQuote = 0;
        }
        
    }
   
    $("#new-quote").click(genarateNextquote);
   
  // jQuery methods go here...
  
});
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
