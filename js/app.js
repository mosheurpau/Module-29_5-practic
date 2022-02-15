const titles = document.getElementsByClassName('top-title');
for (const title of titles) {
    title.style.color = 'green';
}

const bgColor = document.getElementById('bg-color');
bgColor.style.backgroundColor = "rgba(113, 104, 124, 0.14)";

const newLi = document.getElementById('add-btn').addEventListener('click', function () {
    const ulItem = document.getElementById('ul-item');
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("It's a new element"));
    ulItem.appendChild(li);
});

const incrementBtn = document.getElementById('increment-btn').addEventListener('click', function () {
    let num = document.getElementById('rating-num');
    numText = num.value;
    numValue = parseInt(numText);
    if (numValue < 5) {
        numValue += 1;
        num.value = numValue;
    }
    if (numValue == 5) {
        num.value = numValue;
        document.getElementById('increment-btn').disabled = true;
    }
    console.log(numValue);
});