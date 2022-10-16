let menu = document.getElementById("menu-bar");
let item = document.getElementById("item");

item.style.right = '-800px';
menu.onclick = function() {

        if (item.style.right == '-800px') {
            item.style.right = '0';
        } else {
            item.style.right = '-800px';
        }
    }

item.onclick = function() {

    if (item.style.right == '-800px') {
        item.style.right = '0';
    } else {
        item.style.right = '-800px';
    }
}