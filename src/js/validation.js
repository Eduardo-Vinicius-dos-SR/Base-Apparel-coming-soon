const emailForm = document.getElementsByClassName("email-form")[0];
const inputEmail = document.getElementsByClassName("email-input")[0];
const submitEmail = document.getElementsByClassName("submit-email")[0];

submitEmail.addEventListener("click", () => {
	if (!inputEmail.checkValidity() || inputEmail.value === "") {
		alert("The input field is empty or The email address is not formatted correctly");
		emailForm.classList.add("invalid");
	} else {
		emailForm.classList.remove("invalid");
	}
});
