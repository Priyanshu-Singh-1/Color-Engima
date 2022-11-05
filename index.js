const colors = ["green", "red", "blue", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");

const span = document.getElementsByClassName("color");

btn.addEventListener('click', function(){
        // console.log(document.body);
        //get random number between 0-4
        const randomnumber  = getrandomnumber();
        console.log(randomnumber);

        document.body.style.backgroundColor = colors[randomnumber];

        document.getElementsByClassName("color")[0].innerHTML = colors[randomnumber];

});

function getrandomnumber(){
        return Math.floor(Math.random()*colors.length);
}