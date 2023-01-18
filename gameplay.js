function add() {
    cookies += cpc
    document.getElementById("score_text").value = cookies
}
function save() {
    localStorage.setItem("cookies", cookies)
    localStorage.setItem("cost", cost)
    localStorage.setItem("cpc", cpc)
}
function load() {
    cookies = parseInt(localStorage.getItem("cookies"))
    document.getElementById("score_text").value = cookies
    cost = parseInt(localStorage.getItem("cost"))
    document.getElementById("cost_text").value = cost
    cpc = parseInt(localStorage.getItem("cpc"))
    document.getElementById("cpc_text").value = cpc
}
function upgrade() {
    if (cookies >= cost) {
        cookies -= cost
        cost +=  Math.floor(Math.random() * (max_cost - min_cost)) + min_cost;
        cpc += Math.floor(Math.random() * (max_cpc - min_cpc)) + min_cpc;
        document.getElementById("cost_text").value = parseInt(cost)
        document.getElementById("cpc_text").value = parseInt(cpc)
        document.getElementById("score_text").value = parseInt(cookies)
    }
}