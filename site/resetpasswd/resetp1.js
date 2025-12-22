function redirect(where)
{
    window.location.assign(where);
}

let form = document.getElementById("resetform");

form.addEventListener("submit", (event) => 
	{
		event.preventDefault();

        redirect("./emailcheck.html");
    }
)