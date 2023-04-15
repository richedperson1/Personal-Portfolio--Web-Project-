
let portfolio_btn = document.querySelector("#portfolio")

portfolio_btn.addEventListener("click", () => {
    let portfolio_section = document.querySelector("#portfolio-div");
    console.log(portfolio_section);
    portfolio_section.scrollIntoView()
});


// function scroll_down_to_id() {
//     portfolio_section = document.querySelector("#portfolio-section-id");
//     console.log("clicked", portfolio_section);

//     portfolio_section.scrollIntoView({ behavior: 'smooth' });
// }