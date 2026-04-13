//DO NOT CHANGE THIS FUNCTION
function add_svg(wrapper) 
{
  var svg = d3.select(wrapper).select("svg");

  if (svg.empty())
    svg = d3.select(wrapper).append("svg");
  else
    svg.selectAll("*").remove();

  return svg.attr("width", 300).attr("height", 300);
}

//DO NOT CHANGE THIS FUNCTION
function set_update(div_id, _)
{

  comm.call({n: 5})
  setInterval(function(){ comm.call({n: 5}) }, 2000);
}

function draw_circle(wrapper, data)
{
  let svg = add_svg(wrapper);

  //TO DO 
}

function draw_boxplot(wrapper, data)
{
  //registering function
  py_callback = new CommAPI("python_callback",
    function (data)
    {
      alert(data['y']);
    });

  let svg  = add_svg(wrapper); 


  //TO DO

}

function draw_histogram(wrapper, data)
{
  let svg  = add_svg(wrapper);  
  
  //TO DO
}
