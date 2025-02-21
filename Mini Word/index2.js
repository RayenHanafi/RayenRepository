const input = document.getElementById('input');
const reset = document.getElementById('reset');
let result = document.getElementById('result');
const colorPicker = document.getElementById('colorPicker');
const fontSize = document.getElementById('fontSize');
const fontStyle = document.getElementById('fontStyle');

input.addEventListener('input', () => {
    result.classList.remove('hidden');
    result.innerHTML = input.value;
    result.style.color = colorPicker.value;
    result.style.fontSize = fontSize.value + 'px';
    result.style.fontFamily = fontStyle.value;
});

reset.addEventListener('click', () => {
    result.classList.add('hidden');
    input.value = '';
    colorPicker.value = '#000000';
    fontSize.value = '16';
    fontStyle.value = 'Arial';
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