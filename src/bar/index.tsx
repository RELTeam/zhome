export const bar = (): Node => <div id="bar">
    <span id="barTitle">ZHome</span>
</div>

export function addBar() {
    document.body.appendChild(bar())
}