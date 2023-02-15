// TODO: Add code to check answers to questions
// Run script once DOM is loaded
document.addEventListener('DOMContentLoaded', function () {

    // When correct answer is clicked, change color to green
    let correct1 = document.querySelector('.correct1');
    correct1.addEventListener('click', function () {
        correct1.style.backgroundColor = 'green';
        document.querySelector('#feedback1').innerHTML = 'Correct!';
    });

    // When any incorrect answer is clicked, change color to red
    let incorrects1 = document.querySelectorAll('.incorrect1');
    for (let i = 0; i < incorrects1.length; i++) {
        incorrects1[i].addEventListener('click', function () {
            incorrects1[i].style.backgroundColor = 'red';
            document.querySelector('#feedback1').innerHTML = 'Incorrect';
        });
    }
    // When correct answer is clicked, change color to green
    let correct2 = document.querySelector('.correct2');
    correct2.addEventListener('click', function () {
        correct2.style.backgroundColor = 'green';
        document.querySelector('#feedback2').innerHTML = 'Correct!';
    });

    // When any incorrect answer is clicked, change color to red
    let incorrects2 = document.querySelectorAll('.incorrect2');
    for (let i = 0; i < incorrects2.length; i++) {
        incorrects2[i].addEventListener('click', function () {
            incorrects2[i].style.backgroundColor = 'red';
            document.querySelector('#feedback2').innerHTML = 'Incorrect';
        });
    }


    // Check free response submission
    document.querySelector('#check3').addEventListener('click', function () {
        let input = document.querySelector('#input3');
        if (input.value === 'Switzerland') {
            input.style.backgroundColor = 'green';
            document.querySelector('#feedback3').innerHTML = 'Correct!';
        } else {
            input.style.backgroundColor = 'red';
            document.querySelector('#feedback3').innerHTML = 'Incorrect';
        }
    });

    document.querySelector('#check4').addEventListener('click', function () {
        let input = document.querySelector('#input4');
        if (input.value === 'towel') {
            input.style.backgroundColor = 'green';
            document.querySelector('#feedback4').innerHTML = 'Correct!';
        } else {
            input.style.backgroundColor = 'red';
            document.querySelector('#feedback4').innerHTML = 'Incorrect';
        }
    });
});