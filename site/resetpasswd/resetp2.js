function redirect(where)
{
    window.location.assign(where);
}

let form = document.getElementById("mailcheck");

form.addEventListener("submit", (event) => 
	{
		event.preventDefault();

        let code = document.getElementById("code").value;

        if (code == 111111) 
        {
            redirect("./newpass.html");
        }
    }
)