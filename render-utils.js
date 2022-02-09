export function renderGuys(guy) {
    const div = document.createElement('div');
    div.classList.add('Guy');

    const img = document.createElement('img');
    img.src = `./assets/${guy.name}.xxx`;

    const a = document.createElement('a');
    a.href = `./guys/?id=${guy.id}`;
    
    const nameEl = document.createElement('h4');
    nameEl.textContent = guy.name;

    a.append(img, nameEl);
    div.append(a);
    return div;
}