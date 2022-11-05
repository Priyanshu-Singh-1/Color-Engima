const hexset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.getElementsByClassName("color")[0];

btn.addEventListener('click', function(){

        let hex = "#";
        for(let i=0;i<6;i++){

                let temp = hexset[Math.floor(Math.random()*hexset.length)];
                hex = hex + temp;
        }

        document.body.style.backgroundColor = hex;
        color.innerHTML = hex;


});



