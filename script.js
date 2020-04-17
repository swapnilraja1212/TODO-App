
var list = document.getElementById('todo-list')

function countToDo(){
	var itemCountSpan = document.getElementById('todo-list').childElementCount;
	document.getElementById('item-count').innerHTML = itemCountSpan;
}
count = 0;
function newTodo() {
	count += 1;
	var elementLI = document.createElement("li");
	
	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.setAttribute("id", "checkbox" + count);
	elementLI.appendChild(checkBox);
	checkBox.setAttribute('onclick', 'countCheck()');
	checkBox.setAttribute('class', 'todocheckbox');
	var textLI = document.createTextNode("NEW TODO LIST " + count);
	elementLI.appendChild(textLI);
	list.appendChild(elementLI);
	
	var closeButton = document.createElement("button");
	closeButton.setAttribute('onclick','deleteButton(this)')
	closeButton.setAttribute('class','closeButton')
	var buttonValue = document.createTextNode("X");
	closeButton.appendChild(buttonValue);
	elementLI.appendChild(closeButton);
	

	
	countToDo();
	uncheckCount();
}

function deleteButton(x){
	x.parentElement.remove();
	uncheckCount();
	countToDo();
}

function uncheckCount()
{
	var uncheckedCountSpan = document.getElementById('todo-list').childElementCount;
	var checkedLength = document.querySelectorAll('input[type="checkbox"]:checked').length;
	document.getElementById('unchecked-count').innerHTML = uncheckedCountSpan - checkedLength;
	
}

function countCheck(){
	var checkNumber = document.querySelectorAll('input[type="checkbox"]:checked').length;
	var uncheckedCountSpan = document.getElementById('todo-list').childElementCount;
		uncheckedCountSpan = uncheckedCountSpan - checkNumber;
	document.getElementById('unchecked-count').innerHTML = uncheckedCountSpan;
}

function deleteTodo(){
	if(document.querySelectorAll('input[type="checkbox"]').length < 1){
		alert ("You do not have any TODO list");
	}
	else if(document.querySelectorAll('input[type="checkbox"]:checked').length < 1){
		alert ("please select atleast one ToDo List");
	}
	else{
		
		var answer = confirm('Are you sure you want to delete the selected TODO list?');
		if (answer){
			var x = document.querySelectorAll('input[type="checkbox"]:checked')
				for (var i = 0; i < x.length; i++) {
				x[i].parentElement.remove(x);
				}
		}

	}
	
}