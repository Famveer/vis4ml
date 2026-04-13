//Don't change add_svg
function add_svg(wrapper) 
{
  var svg = d3.select(wrapper).select("svg");

  if (svg.empty())
    svg = d3.select(wrapper).append("svg");
  else
    svg.selectAll("*").remove();

  return svg.attr("width", 300).attr("height", 300);
}

//Don't change set_update
function set_update(div_id, _)
{

  comm.call({n: 5})
  setInterval(function(){ comm.call({n: 5}) }, 2000);
}

function draw_circle(wrapper, data)
{
  let svg = add_svg(wrapper);


//TO DO 
// add circles


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

  // add axis
  
  let y_min = d3.min(y_axis_val)
  let y_max = d3.max(y_axis_val) 
  
  // add scalers

  // add dots
  
  // add lines
  
  // add paths
  
}
