let topE = document.getElementById("top")
let rightE = document.getElementById("right")
let bottomE = document.getElementById("bottom")
let leftE = document.getElementById("left")
let box = document.getElementById("box")

let selecters = document.querySelectorAll('.selecter');

selecters.forEach(el => {
    el.addEventListener('mousedown', mouseDownHandle)
})

function mouseDownHandle(e) {
    e.target.addEventListener('mouseup', mouseUpHandle)
    // e.target.addEventListener('mousemove', mouseMoveHandle)
    // document.removeEventListener('mouseup', mouseUpHandleD)
    document.removeEventListener('mousemove', mouseMoveHandleD(e.target))
}

function mouseMoveHandleD(t) {
    // ele = e.target
    // let id = ele.getAttribute('id')
    // cl(t)
    // cl(id)
    switch (t.id) {
        case "top":
            t.style.left = event.clientX - t.parentNode.clientWidth + '%';
            // cl($$('#'+id).parentNode.offsetX)
            break;
        case "right":
            ele.style.top = t + '%';
            cl(t)
            break;
        case "bottom":
            ele.style.left = l + '%';
            break;
        case "left":
            ele.style.top = t + '%';
            break;
    }


}

function mouseUpHandle(e) {
    e.target.removeEventListener('mouseup', mouseUpHandle)
    // e.target.removeEventListener('mousemove', mouseMoveHandle)
    // document.removeEventListener('mouseup', mouseUpHandleD)
    document.removeEventListener('mousemove', mouseMoveHandleD)
}

function cl(t) {
    console.log(t)
}

function $$(s) {
    return document.querySelectorAll(s)
}

// document.addEventListener('mousemove',(e)=>{
//     cl(e)
//     cl(e.offsetX)
// })