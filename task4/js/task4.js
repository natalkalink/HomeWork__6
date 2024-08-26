// 5. Інвестор вклав x тис. грн на 20 років під 20% річних. 
// Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

let deposit = parseFloat(prompt('Cума вкладу тис. грн', ''))
let percent = 0.20
let years = 20

if (isNaN(deposit) || deposit <= 0) {
	alert('Будь ласка, введіть позитивну суму вкладу!')
} else {
	let sum = deposit

	for (let index = 0; index < years; index++) {
		sum += sum * percent
	}
	document.write(`Кінцева сума через ${years} років : ${sum.toFixed(2)} тис. грн`)
}


