let array = [    
	{user: 'Alex', message: 'Привет, как дела?', isMyMessage: false},
	{user: 'Ivan', message: 'Здарова! Супер! Сам как?', isMyMessage: true},
	{user: 'Alex', message: 'Отлично! Ты как всегда с нами?', isMyMessage: false},
	{user: 'Ivan', message: 'Конечно', isMyMessage: true},
	{user: 'Alex', message: 'Тогда на нашем месте в 7', isMyMessage: false},
	{user: 'Ivan', message: 'Понял, уже бегу...', isMyMessage: true}
];
	
let renderChat = function(dialog) {
	let printHtml = "";
	dialog.forEach(item => {
		printHtml += `
		<div class="pos ${item.isMyMessage ? '' : 'right'}">
		<div class="dialog ${item.isMyMessage ? 'bgLeft' : 'bgRight'}">
			<div class="user">${item.user}</div>		
			<div class="message">${item.message}</div>	
		</div>
		</div>
		`;
	});
	forma.innerHTML = printHtml;
};

renderChat(array);
