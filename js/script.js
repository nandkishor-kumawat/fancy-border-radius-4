let selecters = document.querySelectorAll('.selecter');
let shape = $$('#shape')

selecters.forEach(el => {
    el.addEventListener('mousedown', mouseD)
})

function mouseD() {
    // event.target.addEventListener('mousemove', mouseM)
    // event.target.addEventListener('mouseup', mouseU)
    event.target.classList.add('active')
    document.addEventListener('mousemove', mouseM)
    document.addEventListener('mouseup', mouseU)
}

function mouseM() {
    let e, vt, hz, w, h, l, r, b, t;
    e = event
    el = document.querySelector('.active')
    // el=e.target
    // if(el.localName !== 'span')return

    // console.log(el)
    // el = e.target,
    vt = e.clientY - el.parentElement.offsetTop
    hz = e.clientX - el.parentElement.offsetLeft
    w = shape.offsetWidth
    h = shape.offsetHeight

    if ((hz >= 0 && hz <= w)) {
        switch (el.id) {
            case "top":
                // t =  (hz / w * 100).toFixed();
                // el.style.left = t + '%';
                el.style.left = (hz / w * 100).toFixed() + '%';
                break;
            case "bottom":
                // b = (hz / w * 100).toFixed();
                // el.style.left = b + '%';
                el.style.left = (hz / w * 100).toFixed() + '%';
                break;
        }
    }
    if ((vt >= 0 && vt <= h)) {
        switch (el.id) {
            case "right":
                // r = (vt / h * 100).toFixed();
                // el.style.top = r + '%';
                el.style.top = (vt / h * 100).toFixed() + '%';
                break;
            case "left":
                // l = (vt / h * 100).toFixed();
                // el.style.top = l + '%';
                el.style.top = (vt / h * 100).toFixed() + '%';
                break;
        }
    }

    l = ($$('#left').offsetTop / h * 100).toFixed()
    r = ($$('#right').offsetTop / h * 100).toFixed()
    t = ($$('#top').offsetLeft / w * 100).toFixed()
    b = ($$('#bottom').offsetLeft / w * 100).toFixed()
    setBorder(l, r, t, b)

}

function mouseU() {
    // event.target.removeEventListener('mousemove', mouseM)
    // event.target.removeEventListener('mouseup', mouseU)
    document.removeEventListener('mousemove', mouseM)
    document.removeEventListener('mouseup', mouseU)
    document.querySelector('.active').classList.remove('active')
    // console.log('t')
}

function setBorder(l = 50, r = 50, t = 50, b = 50) {

    // console.log(l,r,t,b)
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
