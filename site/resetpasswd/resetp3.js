function redirect(where)
{
    window.location.assign(where);
}

let form = document.getElementById("newpass");
let repeat = document.getElementById("repeat");
let errorbox = document.getElementById("error") ;

form.addEventListener("submit", (event) => 
	{
		event.preventDefault();

        let pass1 = document.getElementById("password").value;
        let pass2 = document.getElementById("repeat").value;

        if (pass1 == pass2) 
        {
            redirect("../loggedin/indexplus.html");
        }
        else
        {
            errorbox.innerHTML = `Passwords don't match`;
            repeat.classList.add("failure");


        }

    }
)