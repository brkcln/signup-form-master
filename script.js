const submitBtn = document.getElementById("submit-btn");

const validate = (e) => {
	e.preventDefault();
	const username = document.getElementById("form__inputs-name");
	const password = document.getElementById("form__inputs-password");
	const lastname = document.getElementById("form__inputs-lastname");
	const emailAddress = document.getElementById("form__inputs-email");

	const emailError = document.querySelector(".form__error-email");
	const nameError = document.querySelector(".form__error-name");
	const lastnameError = document.querySelector(".form__error-lastname");
	const passwordError = document.querySelector(".form__error-password");

	if (username.value === "") {
		nameError.innerHTML = "First name cannot be empty";
		nameError.classList.add("error");
		username.classList.remove("hidden");
		username.focus();
		return false;
	} else {
		username.classList.add("hidden");
		nameError.innerHTML = "";
	}
	if (lastname.value === "") {
		lastnameError.innerHTML = "Last name cannot be empty";
		nameError.classList.add("error");
		lastname.classList.remove("hidden");
		lastname.focus();
		return false;
	} else {
		lastname.classList.add("hidden");
		lastnameError.innerHTML = "";
	}
	if (emailAddress.value === "") {
		emailError.innerHTML = "Email name cannot be empty";
		emailAddress.classList.remove("hidden");
		emailAddress.focus();
		return false;
	} else {
		emailAddress.classList.add("hidden");
		emailError.innerHTML = "";
	}
	if (!emailIsValid(emailAddress.value)) {
		emailError.innerHTML = "Looks like this is not an email";
		emailAddress.classList.remove("hidden");
		emailAddress.focus();
		return false;
	} else {
		emailAddress.classList.add("hidden");
		emailError.innerHTML = "";
	}
	if (password.value === "") {
		passwordError.innerHTML = "Password cannot be empty";
		password.classList.remove("hidden");
		password.focus();
		return false;
	} else {
		password.classList.add("hidden");
		passwordError.innerHTML = "";
	}
	return true;
};
const emailIsValid = (email) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
submitBtn.addEventListener("click", validate);
