const input = document.getElementById('input');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
let result = document.getElementById('result');
const colorPicker = document.getElementById('colorPicker');
const fontSize = document.getElementById('fontSize');
const fontStyle = document.getElementById('fontStyle');

submit.addEventListener('click', () => {
    result.classList.remove('hidden');
    result.innerHTML = input.value;
    result.style.color = colorPicker.value;
    result.style.fontSize = fontSize.value + 'px';
    result.style.fontFamily = fontStyle.value;
});

reset.addEventListener('click', () => {
    result.classList.add('hidden');
    input.value = '';
});

colorPicker.addEventListener('change', () => {
    result.style.color = colorPicker.value;
});

fontSize.addEventListener('change', () => {
    result.style.fontSize = fontSize.value + 'px';
});

fontStyle.addEventListener('change', () => {
    result.style.fontFamily = fontStyle.value;
});