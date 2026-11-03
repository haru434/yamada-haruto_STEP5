const textInput = document.getElementById('text-input');
const displayButton = document.getElementById('display-button');
const addButton = document.getElementById('add-button');
const backgroundButton = document.getElementById('background-button');
const displayArea = document.getElementById('display-area');
const tableBody = document.getElementById('table-body');
const rowCount = document.getElementById('row-count');

// 表示：入力した文字を表示し、黄色のハイライトを切り替える
displayButton.addEventListener('click', () => {
    const text = textInput.value;

    if (text.trim() === '') {
        alert('入力値が空です。');
        return;
    }

    displayArea.textContent = text;
    displayArea.classList.toggle('highlight');
});

// 背景色：水色 → 薄緑 → 薄い赤の順に切り替える
const backgroundColors = ['lightblue', 'lightgreen', 'lightcoral'];
let colorIndex = 0;

backgroundButton.addEventListener('click', () => {
    document.body.style.backgroundColor = backgroundColors[colorIndex];
    colorIndex = (colorIndex + 1) % backgroundColors.length;
});

// 現在の行数と「表示」ボタンの表示状態を更新する
function updateRowCount() {
    const count = tableBody.rows.length;
    rowCount.textContent = count;
    displayButton.hidden = count >= 3;
}

// 追加：表の末尾に行と削除ボタンを追加する
addButton.addEventListener('click', () => {
    const text = textInput.value;

    if (text.trim() === '') {
        alert('入力値が空です。');
        return;
    }

    const row = document.createElement('tr');
    const textCell = document.createElement('td');
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');

    textCell.textContent = text;
    deleteButton.type = 'button';
    deleteButton.textContent = '削除';

    deleteButton.addEventListener('click', () => {
        row.remove();
        updateRowCount();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(textCell);
    row.appendChild(actionCell);
    tableBody.appendChild(row);

    // 4件目が追加されたら、一番古い行を削除する
    if (tableBody.rows.length > 3) {
        tableBody.deleteRow(0);
    }

    updateRowCount();
});

// コンソールに1から5まで出力する
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
