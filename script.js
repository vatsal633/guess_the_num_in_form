var username = document.getElementById('username')
var passworld = document.getElementById('password')

var new_username = document.getElementById('new_username')
var new_password = document.getElementById("new_password")

new_username.style.display = 'none'
new_password.style.display = 'none'

function check1() {
    if (username.value == 'admin@123' && passworld.value == "vatsal") {
        alert("password is correct")

    }

    else if (username.value == '' && passworld.value == '') {
        alert("pls enter the password and username ")
    }

    //this block execxute when user enter wrong password or username

    else {

        function enterkey(event){
            if(event.keyCode === 13){
              check();  
            }
        }

        document.getElementsByTagName('main')[0].style.display = 'flex'
        let ran_num = Math.floor(Math.random() * 100 + 1)
        let gues = 0;
        console.log(ran_num)

        document.getElementById('ch').onclick = function check() {
            let user_number = document.getElementById('inp').value

            if (user_number == ran_num) {
                document.getElementById('ans').innerHTML = "You Guess It Right"
                document.getElementById('ans').style.color = 'green'
                document.getElementById('ans').style.fontWeight = '600'
                document.getElementById('ans').style.fontSize = '23px'

                document.getElementById('trys').innerHTML = "Total Guess: " + gues;
                let score = document.getElementById('score')

                let final_score = 100 - gues

                score.innerHTML = "Your Score Is: " + final_score

                let re_button = document.getElementById('btn').innerHTML = "<button>Restart The Game</button>"

                username.style.display = 'none'
                passworld.style.display = 'none'

                new_username.style.display = 'block'
                new_password.style.display = 'block'

                
                document.getElementById('first').onclick = function func(){
                    alert("you have been log in successfully")

                    setTimeout(function(){
                        document.getElementsByTagName('main')[0].style.display = 'none'
                    },200)
                }
    
                setTimeout(function() {
                    alert('now you can log in with another username or password');
                },300);
            }

            else if (user_number > 100) {
                document.getElementById('ans').innerHTML = "Pls Enter Number Between 1 to 100"
            }

            else if (user_number > ran_num) {
                document.getElementById('ans').innerHTML = "Your Num Is Greater Than Actual Number"
                gues++;
            }

            else {
                document.getElementById('ans').innerHTML = "Your Num Is Less Than Actual Number"
                gues++;
            }

        }


        document.getElementById('btn').onclick = function restart() {

            location.reload();

        }

    }
}
