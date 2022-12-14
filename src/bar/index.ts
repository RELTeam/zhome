export function bar(): Node {
    const div = document.createElement('div')
    div.innerHTML = `<span id="barTitle">ZHome</span>`
    return div
}

export function addBar() {
    document.body.appendChild(bar())
}