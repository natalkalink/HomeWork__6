// 6. Інвестор вклав x тис.грн на 20 років під 20 % річних,
// податок складає 5 % від суми прибутку. 
// Визначити за допомогою циклів суму, яку він одержить.

let deposit = parseFloat(prompt('Cума вкладу тис. грн', ''))
let percent = 0.20
let years = 20
let incomeTax = 0.05

if (isNaN(deposit) || deposit <= 0) {
	alert('Будь ласка, введіть позитивну суму вкладу!')
} else {
	let sum = deposit

	for (let index = 0; index < years; index++) {
		let income = sum * percent // Прибуток за рік
		let tax = income * incomeTax // Податок на прибуток
		sum += income - tax // Додаємо чистий прибуток до суми
	}

	document.write(`Кінцева сума через ${years} років : ${sum.toFixed(2)} тис. грн (після податку)`)
}


