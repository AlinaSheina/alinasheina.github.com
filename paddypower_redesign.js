// Необходимо привести страницу вида http://www.paddypower.it/scommesse-calcio
// К виду, как был показан на картинке
// Работает только для открытой вкладки (содержимое вкладок подгружается динамически)
// Для выполнения необходимо зайти на сайт и в консоли ввести следующий код


'use strict';


jQuery(function() {

	var wholeTable = jQuery('.tabCnt');
	var tables = wholeTable.find('.footballcard');

// меняем ширину колонок таблицы
	tables.each(function() {
		var table = jQuery(this);

		table.find('col').eq(4).css('width', '120px');
		table.find('col').eq(5).css('width', '10px');
		table.find('col').eq(6).css('width', '10px');
	});

// скрываем ненужные элементы
	wholeTable.find('#lb_fb_coupon_col_fb_hp_feat_tab_FEAT_H').hide();
	wholeTable.find('#lb_fb_coupon_col_fb_hp_feat_tab_FEAT_D').hide();
	wholeTable.find('#lb_fb_coupon_col_fb_hp_feat_tab_FEAT_A').hide();

	tables.find('tbody tr').each(function() {
		var row = jQuery(this);

// перегруппировуем кнопочки
		var buttonsRate = row.find('.fbhlt').children();
		buttonsRate.eq(0).after(buttonsRate.eq(1));
		buttonsRate.eq(1).after(buttonsRate.eq(2));

// добавляем в нужную колонку необходимый текст
		row.find('.tv').append('<div class = "style" >1</div>');
		row.find('.tv').append('<div class = "style">X</div>');
		row.find('.tv').append('<div class = "style">2</div>');

// считаем ставку умноженную на 20
		var gains1 = buttonsRate.eq(0).find('span').text() * 20;
		var gains2 = buttonsRate.eq(1).find('span').text() * 20;
		var gains3 = buttonsRate.eq(2).find('span').text() * 20;

// создаем в нужной колонике надписи с выигрышем
		row.find('.fbhlt').eq(1).append('gioca €20 vinci €' + gains1 + '<br />').addClass('new');
		row.find('.fbhlt').eq(1).append('gioca €20 vinci €' + gains2 + '<br />').addClass('new');
		row.find('.fbhlt').eq(1).append('gioca €20 vinci €' + gains3).addClass('new');

	});

	wholeTable.find('.style').css({
		'font-size': '12px',
		'color': '#197caf',
		'margin-bottom': '10px',
		'margin-top': '10px',
		'font-weight': 'bold'
	});

	wholeTable.find('.new').css({
		'font-size': '12px',
		'color': '#197caf',
		'line-height': '25px',
		'font-weight': 'normal'
	});

});