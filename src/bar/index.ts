export function bar(): Node {
    return `<div id="bar"><span id="barTitle">ZHome</span></div>`
}

export function addBar() {
    document.body.innerHTML = bar() + document.body.innerHTML
}
