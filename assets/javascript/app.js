
let gameTimer;
let correct = 0;
let nocorrect = 0;

//question array
const questions = [

    {

        q: "I'm the Holiday Armadillo!",
        a: ["Ross", "Chander", "Joey", "Monica"],
        correctAnswer: 0

        //ALWAYS PUT COMMAS BETWEEN ARRAY ELEMENTS!!!!! 

    },
    {
        q: "But they don't know that we know they know we know!",
        a: ["Phoebe", "Chander", "Joey", "Monica"],
        correctAnswer: 1
    },
    {
        q: "Someone on the subway licked my neck. LICKED MY NECK!",
        a: ["Joey", "Monica", "Chandler", "Ross"],

        correctAnswer: 3
    },

    {
        q: "I mean, isn't that just kick-you-in-the-crotch, spit-on-your-neck, fantastic!",
        a: ["Rachel", "Chandler", "Joey", "Monica"],
        correctAnswer: 0


    }
]

//Render questions 

function renderQuestions() {

    //let $ol = $("<ol>");

    for (let i = 0; i < questions.length; i++) {

        //let $questionLi = $('<li>'); //creating a list element
        //$questionLi.text(questions[i].q);   // <li> I'M A HOLIDAY ARMADILLO! </li>       

        //let $div = $('<div>') 

        //let $ul =$('<ul>');
        let currentAnswersArray = questions[i].a; // [the key to the answers 'ross', 'chandler'] // an ARRAY

        // for each possible answer in my answers array, I will create a list element, insert the text, then append it to my ul element
        $("#questions").append("<h2>" + questions[i].q + "</h2>");
        for (let j = 0; j < currentAnswersArray.length; j++) { // loop through possible answers
            //  let $answerLi = $('<li>'); // create HTML list element
            // console.log(currentAnswersArray[j]); 
            //  $answerLi.text(currentAnswersArray[j]) // insert possible answer at index i into HTML list element
            //  $ul.append($answerLi); // append HTML list element to HTML ul element


            //creating radio buttons for answer array 
            var response = `<input type="radio" index="${j}">${currentAnswersArray[j]}`
            $("#questions").append(response)


        }

        // once my 'unordered list' is complete/fulll with my possible answers, I will append it to my div
        // $div.append ($ul)
        // $questionLi.append($div); // append the div to my question
        // $ol.append($questionLi); // append question to my 'ordered list'
    }

    //$('.questions').append($ol); // append this package (questions/answers) to my 'questions' div


    $("#questions").append("<button id='submit'>Submit</button>");

    $("#submit").on("click", function (event) {

        event.preventDefault();
        //go to document and look in this id element to see if all response categories were checked 
        // var inputs = $("#questions").children("input:checked");

        // for (let i = 0; i < inputs.length; i++) {
        //     let value = parseInt(("input:", $(inputs[i]).attr("index")))
        //     console.log(value)
        //     if (value === questions[i].correctAnswer) {
        //         correct++

        //     }
        //     else {
        //         nocorrect++
        //     }

        // }

        // console.log('emptied?')
        // $("#results").append(`<p>Correct: ${correct}</p>`)
        // $("#results").append(`<p>Incorrect: ${nocorrect}</p>`)

        // show the results
        results();
    })


}

// timer (//start the timer, then when the timer is done then go to results // stp timer prespare results show resutls)
// style the page 
function stopGame() {
    // alert('Game is stopped!')
    clearTimeout(gameTimer);
    results()

}

// Ensures HTML has rendered to page before logic is applied.
$(document).ready(function () {

    $('#start-btn').on('click', function () {
        $(this).hide();
        gameTimer = setTimeout(stopGame, 10000);
        renderQuestions();

    });


})


function results() {

    var inputs = $("#questions").children("input:checked");
    correct = 0;
    nocorrect = 0;

    for (let i = 0; i < inputs.length; i++) {
        let value = parseInt(("input:", $(inputs[i]).attr("index")))
        console.log(value)
        if (value === questions[i].correctAnswer) {
            correct++
        } else {
            nocorrect++
        }

    }
    $('#results').empty();
    $("#results").append(`<p>Correct: ${correct}</p>`)
    $("#results").append(`<p>Incorrect: ${nocorrect}</p>`)


    //not answered
    let noanswered = questions.length - (correct + nocorrect)
    $("#results").append(`<p>Not answered: ${noanswered}</p>`)
}

        // <div> 
        //     <ul> 
        //         <li>Ross</li> 
        //         <li>Chandler</li> 
        //         <li>Joey</li> 
        //         <li>Monica</li> 
        //     </ul>
        // </div>

        //access info in answers array:

        // console.log("answers", questions[i].a)

   // let $trueButton = $("<button>");
        // $trueButton.text('true');
        // $trueButton.attr('data-answer', questions[i].a);
        // $trueButton.attr('data-value', 'true')
        // $li.append($trueButton);

        // let $falseButton = $("<button>");
        // $falseButton.text('false');
        // $falseButton.attr('data-answer', questions[i].a);
        // $falseButton.attr('data-value', 'false');
        // $li.append($falseButton);