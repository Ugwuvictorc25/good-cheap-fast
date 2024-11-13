const allInput = document.querySelectorAll("input");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
const fast = document.querySelector("#fast");

allInput.forEach((input) => {
	input.addEventListener("click", function (e) {
		const theClickOne = input;

		if (cheap.checked && good.checked && fast.checked) {
			if (fast === theClickOne) {
				good.checked = false;
			}

			if (cheap === theClickOne) {
				fast.checked = false;
			}

			if (good === theClickOne) {
				cheap.checked = false;
			}
		}
	});
});
