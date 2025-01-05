Code in exams_questions

--------------------------------------------------------------------------

Question 04 : Write regular expression for below strings

johndoe@company.com.uk

---------------------------------------------------------------------------

Question 03 : Write the output of given javascript code

function myStery(array) {
const tmp = array[array.length - 1];

    for(let i = 0; i < array.length; i++) {
        array[i] = array[i - 1];
    }

    array[0] = tmp;
    return array;

}

const arrayList = [10, 20, 30, 40, 50];
console.log(myStery(arrayList));

---------------------------------------------------------------------------

Question 02 : Write javascript function to hide the heading.

<body>
<h1 id='hd1'>Click to hide</h1>
<button onclick='hideHeading()'>Hide Heading</button>
</body>

---------------------------------------------------------------------------

Question 01 : Write html code that refresh html page after automaticaaly after every 30 seconds
