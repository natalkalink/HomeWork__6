// 11. Вивести на екран усі двоцифрові числа,
// у яких перша цифра є більшою або рівною за другу.

for (let num1 = 1; num1 <= 9; num1++) {// Перша цифра
	for (let num2 = 0; num2 <= 9; num2++) {// Друга цифра
		if (num1 >= num2) {// Перевіряємо умову
			document.write(`${num1}${num2} `)// Виводимо число
		}
	}
	document.write('<br>')
}


// for (let number = 10; number <= 99; number++) {
// 	// Отримуємо першу і другу цифри числа
// 	let tens = Math.floor(number / 10) // Перша цифра
// 	let ones = number % 10 // Друга цифра
// 	// Перевіряємо умову
// 	if (tens >= ones) {// Перша цифра
// 		document.write(number + ' ') // Виводимо число
// 	}
// }