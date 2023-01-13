const tabs = Array.from(document.querySelectorAll("form .tab"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("next");
    });
});

prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("prev");
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input:checked").forEach((input) => {
        const {name, value} = input;
        inputs.push({name, value});
    });
    console.log(inputs);
    form.reset();
});

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = tabs.indexOf(active);
    tabs[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }
    tabs[index].classList.add("active");
};