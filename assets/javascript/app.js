$(document).ready(function () {

    // getting start button
    var startBtn = $('#start-button')
    startBtn.on("click", function () {

        function stopGame(btn) {
            $('#counter').addClass('hide')
            btn.addClass('hide')
            // Number = constructor 
            // https://www.w3schools.com/jsref/jsref_constructor_number.asp
            var q1Value = Number($("input[name='q1']:checked").val()),
                q2Value = Number($("input[name='q2']:checked").val()),
                q3Value = Number($("input[name='q3']:checked").val()),
                q4Value = Number($("input[name='q4']:checked").val()),
                q5Value = Number($("input[name='q5']:checked").val())

            var correctAnswers = []
            var incorrectAnswers = []

            //DRY Don't Repeat Yourself
            function checkAnswer(answerSupplied, correctAnswer) {
                //Why am i using === instead of == (because of data types)
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
                if (answerSupplied === correctAnswer) {
                    //what is .push()
                    //https://www.w3schools.com/js/js_array_methods.asp
                    correctAnswers.push(answerSupplied)
                    return true
                } else {
                    incorrectAnswers.push(answerSupplied)
                    return false
                }
            }

            checkAnswer(q1Value, 2)
            checkAnswer(q2Value, 3)
            checkAnswer(q3Value, 3)
            checkAnswer(q4Value, 2)
            checkAnswer(q5Value, 1)
            console.log(correctAnswers.length)
            $('#trivia-form').addClass('hide')
            $('#game-over').removeClass('hide')
            $('#correct-answers').append(correctAnswers.length)
            $('#incorrect-answers').append(incorrectAnswers.length)

        }
        //make timer 
        var count = 20;
        var timer = setInterval(function () {
            $('#counter').html(count--)
            if (count == -1) {
                clearInterval(timer)
                $('#counter').addClass('hide')
                stopGame($('#submit'))
            }
        }, 1000);

        //getting clicked start button
        var btn = $(this)
        btn.addClass('hide')

        //getting form
        var form = $('#trivia-form')
        form.removeClass('hide')

        //getting submit button
        var submit = $('#submit')
        submit.on("click", function (event) {
            // https://www.w3schools.com/jquery/event_preventdefault.asp
            event.preventDefault()
            stopGame($('#submit'))

        });
    })

})