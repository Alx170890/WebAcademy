let array = [
    {operation: "1 + 2 + (3 / 3)", result: "4"},
    {operation: "2 + 2 + 2", result: "6"},
    {operation: "(4 + 4) / 2", result: "4"},
    {operation: "66 / 3", result: "22"},
	{operation: "105 - 55", result: "50"}];
	
const renderCulcHistory = function(history) {
	let printHtml = "";
	history.forEach(item => {
		printHtml += `
		<div class="numb">
			<div class="operation">${item.operation}</div>
			<div>=</div>
			<div class="result">${item.result}</div>	
		</div>
		`;
	});
	forma.innerHTML = printHtml;
};

renderCulcHistory(array);
    
