// Задание: Сделать редизайн habrahabr.ru. Код должен работать только на главной странице.
// Боковая колонка:
// 1. Убрать блок рекламы, если есть (в правой колонке) http://grab.by/qCno
// 2. Убрать хабранавигатор (если есть) http://grab.by/qCnm
// 3. Разделить прямой эфир на 2 отдельных блока (посты, qa) (внутри есть переключалка). 
// 4. Все блоки сделать collapsible https://www.google.com/#q=collapsible и свернутыми по умолчанию.
// Главная колонка:
// 1. Убрать рейтинги, описание, флаги. Должны остаться только ссылки на пост и теги http://grab.by/qCoo
// 2. Справа от каждой ссылки поста показать количество комментариев к посту. (на скриншоте это не показано, но должно быть).

'use strict';

$(function() {

	// 1. Убрать блок рекламы
	$('.banner_300x500').remove();
	$('#htmlblock_placeholder').remove();

	// 2. Убрать хабранавигатор
	$('.fast_navigator').remove();

	// 3. Разделить прямой эфир на 2 отдельных блока
	var posts = $('.block.live_broadcast');
	var qa = $(document.createElement('div')).addClass('block').addClass('live_broadcast')

	qa.append(posts.find('.title').clone());
	posts.find('.dotted').remove(':contains("q&a")');
	qa.find('.dotted').remove(':contains("посты")');
	qa.append(posts.find('.qa_activity').show());
	posts.after(qa);

	// 4. Все блоки сделать collapsible и свернутыми по умолчанию.
	$('.sidebar_right .title').next().hide();
	$('.sidebar_right .title').click(function() {
		$(this).next().slideToggle();
	});

});


    // 1. Убрать рейтинги, описание, флаги. 
	$('.posts.shortcuts_items > div > *').each(function(){
		if ( ($(this).hasClass('title')===false) && ($(this).hasClass('hubs')===false) ) {
			$(this).remove();
		}
	});
	$('.flag_recovery').remove();

	// 2. Справа от каждой ссылки поста показать количество комментариев к посту. 
	$('.posts.shortcuts_items > div').each(function(){
		$(this).find('.title').append($(this).find('.comments .all'));
	});