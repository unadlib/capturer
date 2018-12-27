import "../../css/popup.css";

document
    .getElementById('action')
    .addEventListener('click', e => {
        e.target.innerHTML = 'Disable';
    });
