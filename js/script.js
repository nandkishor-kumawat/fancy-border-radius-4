let selecters = document.querySelectorAll('.selecter');
let shape = $$('#shape')

selecters.forEach(el => {
    el.addEventListener('mousedown', mouseD)
})

function mouseD() {
    event.target.classList.add('active')
    document.addEventListener('mousemove', mouseM)
    document.addEventListener('mouseup', mouseU)
    document.body.style.setProperty('user-select','none')
}

function mouseM() {
    let e, vt, hz, w, h, l, r, b, t;
    e = event
    el = document.querySelector('.active')

    vt = e.clientY - el.parentElement.offsetTop
    hz = e.clientX - el.parentElement.offsetLeft
    w = shape.offsetWidth
    h = shape.offsetHeight
    vt = vt < 0 ? 0 : vt
    vt = vt > h ? h : vt
    hz = hz < 0 ? 0 : hz
    hz = hz > w ? w : hz

    switch (el.id) {
        case "top":
            o = (hz / w * 100).toFixed();
            el.style.left = o + '%';
            // el.style.left = (hz / w * 100).toFixed() + '%';
            break;
        case "bottom":
            o = (hz / w * 100).toFixed();
            el.style.left = o + '%';
            // el.style.left = (hz / w * 100).toFixed() + '%';
            break;
        case "right":
            o = (vt / h * 100).toFixed();
            el.style.top = o + '%';
            // el.style.top = (vt / h * 100).toFixed() + '%';
            break;
        case "left":
            o = (vt / h * 100).toFixed();
            el.style.top = o + '%';
            // el.style.top = (vt / h * 100).toFixed() + '%';
            break;
    }
    

    l = ($$('#left').offsetTop / h * 100).toFixed()
    r = ($$('#right').offsetTop / h * 100).toFixed()
    t = ($$('#top').offsetLeft / w * 100).toFixed()
    b = ($$('#bottom').offsetLeft / w * 100).toFixed()
    setBorder(l, r, t, b)

}

function mouseU() {
    document.removeEventListener('mousemove', mouseM)
    document.removeEventListener('mouseup', mouseU)
    document.querySelector('.active').classList.remove('active')
    document.body.style.removeProperty('user-select')
}

function setBorder(l = 50, r = 50, t = 50, b = 50) {
    let bdr = `${t}% ${100 - t}% ${100 - b}% ${b}% / ${l}% ${r}% ${100 - r}%  ${100 - l}% `;

    shape.style.borderRadius = bdr;
    $$('.bdr p').innerText = bdr;
} setBorder()

$$('.bdr button').onclick = e => {
    // navigator.clipboard.writeText(e.target.parentElement.innerText.replace('copy',''))
    navigator.clipboard.writeText(e.target.previousElementSibling.innerText)
}

function $$(s) {
    return document.querySelector(s)
}
