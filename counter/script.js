const $counter = document.querySelector("#js-counter");
document.querySelector("#js-button").addEventListener("click", (e) => {
    let currentCount = parseInt($counter.textContent);
    $counter.textContent = currentCount + 1;
});