let appendSVG = (width, height) => {
    d3.select('body')
        .append("svg")
        .attr("width", width)
        .attr("height", height)     
}

let randomData = (maxWidth, maxHeight, numberPoints) => {
    let data = [];
    for (var i = 0; i < numberPoints; i++) {
        x = maxWidth * Math.random();
        y = maxHeight * Math.random();
        shape =  Math.random() < 0.5 ? 'circle' : 'pentagon';
        data.push({x, y, shape});
    }
    return data;
}

let drawAllCircles = (dataset) => {
    d3.select('svg')
        .selectAll("circle")
        .data(dataset.filter(d => d.shape === 'circle'))
        .enter()
        .append("circle")
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', 20)
        .attr('fill', 'red')
}


let pentagonVertices = (cx, cy, radius) => {
    const numberVertices = 5;
    let vertices = [];
    for (let i = 0; i <= numberVertices; i++) {
        angle = - Math.PI / 2 +  2 * Math.PI * i / numberVertices;
        x = cx + radius * Math.cos(angle);
        y = cy + radius * Math.sin(angle);
        vertices.push(x, y)
    }
    return vertices;
}


let drawAllPentagons = (dataset) => {
    d3.select('svg')
        .selectAll('polygon')
        .data(dataset.filter(d => d.shape === 'pentagon'))
        .enter()
        .append("polygon")
        .attr("points", d => pentagonVertices(d.x, d.y, 20))
        .attr("fill", "blue")
}


let main = () => {
    const svgWidth = 500;
    const svgHeight = 500;
    appendSVG(svgWidth, svgHeight);
    dataset = randomData(svgWidth, svgHeight, 10);
    drawAllCircles(dataset);
    drawAllPentagons(dataset);
}

main()