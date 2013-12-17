// Задание (применимо касательно именно этой страници сайта)

// Для каждого товара извлечь со страницы следующие данные:
// наименование товара
// цену в долларах
// цену в гривнах
// адрес (урл)
// объем памяти

// Необходимо зайти на страницу http://rozetka.com.ua/usb-flash-memory/c80045/
// После чего ввести в консоль следующий код 

'use strict'

var productsList = (function() {
	var wrapsOfProduct = document.querySelectorAll('.gtile-i-wrap');
	var arrayOfProductsInformation = [];

	function getProductInformation(container) {

		var productInformation = {};

		var productsTitle = container.querySelector('.gtile-i-title a');
		var productsPriceUAH = container.querySelector('.g-price-uah');
		var productsPriceUSD = container.querySelector('.g-price-usd');

		var regTitle = /(\w+.\s)+/;
		var regPrise = /\d+/;
		var regMemory = /\s\d+GB/;

		productInformation.title = regTitle.exec(productsTitle.innerHTML)[0];
		productInformation.priceUAH = regPrise.exec(productsPriceUAH.innerHTML)[0];
		productInformation.priceUSD = regPrise.exec(productsPriceUSD.innerHTML)[0];
		productInformation.url = productsTitle.href;
		productInformation.memory = regMemory.exec(productsTitle.innerHTML)[0];;

		return productInformation;
	};

	for (var i = 0; i < wrapsOfProduct.length; i += 1) {
		arrayOfProductsInformation.push(getProductInformation(wrapsOfProduct[i]));
	}
	return arrayOfProductsInformation;

}());

productsList;