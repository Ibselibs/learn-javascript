

if (typeof document !== 'undefined') {
    let countEl = document.getElementById("count-el")

    let count = 0

    function increment() {
        count = count + 1
        countEl.innerText = count
    }

    function save() {
        console.log(count)
    }

    save()
}





// 1. Create a function, save(), which logs out the count when it's called
