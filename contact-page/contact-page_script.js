const inputs = document.querySelectorAll("input, textarea");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const fields = [];
	inputs.forEach((input) => {
		if (input.type === "radio") return fields.push(input.name + ":  " + input.checked);
		fields.push(input.name + ":   " + (input.value || null));
	});
	console.log(fields);
});