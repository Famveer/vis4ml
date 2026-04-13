//Don't change this
function add_svg(wrapper) 
{
  var svg = d3.select(wrapper).select("svg");

  if (svg.empty())
    svg = d3.select(wrapper).append("svg");
  else
    svg.selectAll("*").remove();

  return svg.attr("width", 300).attr("height", 300);
}

//Don't change this
function set_update(div_id, _)
{

  comm.call({n: 5})
  setInterval(function(){ comm.call({n: 5}) }, 2000);
}

function draw_circle(wrapper, data)
{
  let svg = add_svg(wrapper);

  svg.append('circle')
    .attr('cx', 100) 
    .attr('cy', 100)
    .attr('r', 10)
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
    .attr('fill', '#69a3b2')
    .transition()
    .duration(2500)
    .attr("r", 50)
    .attr("fill", "#b26d69");
}

function draw_roc_curve(wrapper, data)
{
  let svg = add_svg(wrapper);

  let x_axis_val = data["x_axis_val"]
  let y_axis_val = data["y_axis_val"]

  let x_min = d3.min(x_axis_val)
  let x_max = d3.max(x_axis_val)

  let scalex = d3.scaleLinear().domain([x_min, x_max]).range([0, svg.attr("width")]);  
  let x_axis = d3.axisBottom().scale(scalex);  

  svg.append('g')
    .attr("class", "x_axis")
    .attr("transform", "translate(30, " + (svg.attr("height") - 20) + ")")
    .call(x_axis);

  let y_min = d3.min(y_axis_val)
  let y_max = d3.max(y_axis_val)    

  let scaley = d3.scaleLinear()
    .domain([y_min, y_max])
    .range([svg.attr("height") - 22, 3]);
  let y_axis = d3.axisLeft().scale(scaley);  

  svg.append('g')
    .attr("class", "y_axis")
    .attr("transform", "translate(30, 0)")
    .call(y_axis);

  let points = x_axis_val.map(function (value, index) {
    return [value, y_axis_val[index]];
  });

  svg.selectAll("dot")
    .data(points)
    .enter()
    .append("circle")
    .attr("r", 3.5)
    .attr("cx", function (d) { return Number(scalex(d[0])) + 30; })
    .attr("cy", function (d) { return Number(scaley(d[1])); })
    .style("fill", "#69b3a2");

  svg.append('line')
    .attr('x1', Number(scalex(x_min)) + 30) 
    .attr('y1', Number(scaley(y_min)))
    .attr('x2', Number(scalex(x_max)) + 30)
    .attr('y2', Number(scaley(y_max)))
    .attr('stroke', '#ff6d69')
    .attr('stroke-width', 3)  

  let line = d3.line()
    .x(d => Number(scalex(d[0])) + 30)
    .y(d => Number(scaley(d[1])))
  
  g.append('path')
      .attr('stroke', '#69b3a2')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('d', line(points))
}
