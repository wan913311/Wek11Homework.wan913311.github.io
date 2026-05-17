document.getElementById('addButton').addEventListener('click', function () {
    var iptValue = document.getElementById('todoInput').value;

    if (iptValue.trim() === "") return;

    var todoList = document.getElementById('todoList');

    var li = document.createElement('li');
    li.textContent = iptValue + " ";

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = "刪除";
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    document.getElementById('todoInput').value = "";
});