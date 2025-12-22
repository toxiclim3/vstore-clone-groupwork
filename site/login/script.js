let loginform = document.getElementById("loginform");
let loginelem = document.getElementById("login");
let passwdelem = document.getElementById("password");

let result = document.getElementById("result");

let premadelogin = "admin";
let premadepass = "admin";

function redirect(where)
{
    window.location.assign(where);
}

let resetpass = document.getElementById("resetpass");
resetpass.addEventListener("click", function ()
{
	redirect("../resetpasswd/indexplus.html");
})

loginform.addEventListener("submit", (event) => 
	{
		event.preventDefault();

		let login = document.getElementById("login").value;
		let password = document.getElementById("password").value;

		if (login == premadelogin && password == premadepass)
		{
			// alert("successfully logged in");

			setTimeout(redirect, 1500, "../loggedin/indexplus.html")

			loginelem.classList.add("success");
			passwdelem.classList.add("success");

			result.innerHTML = ` `;
		}
		else
		{
			loginelem.classList.remove("success");
			passwdelem.classList.remove("success");

			loginelem.classList.add("failure");
			passwdelem.classList.add("failure");

			result.innerHTML = 
			`
				Wrong login or password
			`;
		}
	}
);

// loginform.addEventListener("submit", (event) => 
//     {
//         event.preventDefault();

//         let login = document.getElementById("login").value;
//         let password = document.getElementById("password").value;

//         alert("New account made with the following credentials:\nLogin:" + login + "\nPassword:" + password);
//     }
// );