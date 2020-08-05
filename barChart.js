
let helloWorld = function() {
    d3.select("body")
        .append('h2')
        .text("Hello world!");
}

let numberParagraphs = function() {
    d3.selectAll('p')
        .text((p, i) => `${i}. ${p.innerText}`);
}

let main = function() {
    numberParagraphs();
}

main()