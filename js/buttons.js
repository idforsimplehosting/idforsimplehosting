function equirectangular(){
  d3.select('svg').remove();

  projection = d3.geo.equirectangular();

  path = d3.geo.path()
      .projection(projection);

  svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
          .style("border", "1px solid black");

          d3.json("readme-world.json", function(world){
            var countries = topojson.feature(world, world.objects.countries).features

            svg.selectAll(".country")
                .data(countries)
                .enter().insert("path")
                .attr("class", "country")
                .attr("d", path)

                /* 그림에 점을 찍는 좌표 데이터 */
                var moscow = [36.2672843, 55.5784905];
                    sydney = [151.1750583, -33.86783];
                    london = [-0.12775829999998223, 51.5910899];
                    seoul = [126.8494654, 37.5650172];
                    newyork = [-74.5387542, 40.6971811];

                   console.log(moscow,sydney,london,seoul,newyork);

                    /* 프로젝션한 좌표(점) 부분을 circle로 그린다 */
                  svg.selectAll("circle")
                      .data([moscow,sydney,london,seoul,newyork]).enter()
                      .append("circle")
                       .attr("cx", function (d) { return projection(d)[0]; })
                       .attr("cy", function (d) { return projection(d)[1]; })
                       .attr("r", "7px")
          });
}

function mercator(){
  d3.select('svg').remove();

  projection = d3.geo.mercator();

  path = d3.geo.path()
      .projection(projection);

  svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
          .style("border", "1px solid black");

          d3.json("readme-world.json", function(world){
            var countries = topojson.feature(world, world.objects.countries).features

            svg.selectAll(".country")
                .data(countries)
                .enter().insert("path")
                .attr("class", "country")
                .attr("d", path)

                /* 그림에 점을 찍는 좌표 데이터 */
                var moscow = [36.2672843, 55.5784905];
                  	sydney = [151.1750583, -33.86783];
                  	london = [-0.12775829999998223, 51.5910899];
                		seoul = [126.8494654, 37.5650172];
                		newyork = [-74.5387542, 40.6971811];

                   console.log(moscow,sydney,london,seoul,newyork);

                    /* 프로젝션한 좌표(점) 부분을 circle로 그린다 */
                  svg.selectAll("circle")
                      .data([moscow,sydney,london,seoul,newyork]).enter()
                      .append("circle")
                  	   .attr("cx", function (d) { return projection(d)[0]; })
                    	 .attr("cy", function (d) { return projection(d)[1]; })
                    	 .attr("r", "7px")
          });
}

function orthographic(){
  d3.select('svg').remove();

  projection = d3.geo.orthographic();

  path = d3.geo.path()
      .projection(projection);

  svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
          .style("border", "1px solid black");

          d3.json("readme-world.json", function(world){
            var countries = topojson.feature(world, world.objects.countries).features

            svg.selectAll(".country")
                .data(countries)
                .enter().insert("path")
                .attr("class", "country")
                .attr("d", path)

                /* 그림에 점을 찍는 좌표 데이터 */
                var moscow = [36.2672843, 55.5784905];
                  	sydney = [151.1750583, -33.86783];
                  	london = [-0.12775829999998223, 51.5910899];
                		seoul = [126.8494654, 37.5650172];
                		newyork = [-74.5387542, 40.6971811];

                   console.log(moscow,sydney,london,seoul,newyork);

                    /* 프로젝션한 좌표(점) 부분을 circle로 그린다 */
                  svg.selectAll("circle")
                      .data([moscow,sydney,london,seoul,newyork]).enter()
                      .append("circle")
                  	   .attr("cx", function (d) { return projection(d)[0]; })
                    	 .attr("cy", function (d) { return projection(d)[1]; })
                    	 .attr("r", "7px")
          });
}

function stereographic(){
  d3.select('svg').remove();

  projection = d3.geo.stereographic();

  path = d3.geo.path()
      .projection(projection);

  svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
          .style("border", "1px solid black");

          d3.json("readme-world.json", function(world){
            var countries = topojson.feature(world, world.objects.countries).features

            svg.selectAll(".country")
                .data(countries)
                .enter().insert("path")
                .attr("class", "country")
                .attr("d", path)

                /* 그림에 점을 찍는 좌표 데이터 */
                var moscow = [36.2672843, 55.5784905];
                  	sydney = [151.1750583, -33.86783];
                  	london = [-0.12775829999998223, 51.5910899];
                		seoul = [126.8494654, 37.5650172];
                		newyork = [-74.5387542, 40.6971811];

                   console.log(moscow,sydney,london,seoul,newyork);

                    /* 프로젝션한 좌표(점) 부분을 circle로 그린다 */
                  svg.selectAll("circle")
                      .data([moscow,sydney,london,seoul,newyork]).enter()
                      .append("circle")
                  	   .attr("cx", function (d) { return projection(d)[0]; })
                    	 .attr("cy", function (d) { return projection(d)[1]; })
                    	 .attr("r", "7px")
          });
}

function conicEquidistant(){
  d3.select('svg').remove();

  projection = d3.geo.conicEquidistant();

  path = d3.geo.path()
      .projection(projection);

  svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
          .style("border", "1px solid black");

          d3.json("readme-world.json", function(world){
            var countries = topojson.feature(world, world.objects.countries).features

            svg.selectAll(".country")
                .data(countries)
                .enter().insert("path")
                .attr("class", "country")
                .attr("d", path)

                /* 그림에 점을 찍는 좌표 데이터 */
                var moscow = [36.2672843, 55.5784905];
                  	sydney = [151.1750583, -33.86783];
                  	london = [-0.12775829999998223, 51.5910899];
                		seoul = [126.8494654, 37.5650172];
                		newyork = [-74.5387542, 40.6971811];

                   console.log(moscow,sydney,london,seoul,newyork);

                    /* 프로젝션한 좌표(점) 부분을 circle로 그린다 */
                  svg.selectAll("circle")
                      .data([moscow,sydney,london,seoul,newyork]).enter()
                      .append("circle")
                  	   .attr("cx", function (d) { return projection(d)[0]; })
                    	 .attr("cy", function (d) { return projection(d)[1]; })
                    	 .attr("r", "7px")
          });
}

function azimuthalEquidistant(){
  d3.select('svg').remove();

  projection = d3.geo.azimuthalEquidistant();

  path = d3.geo.path()
      .projection(projection);

  svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
          .style("border", "1px solid black");

          d3.json("readme-world.json", function(world){
            var countries = topojson.feature(world, world.objects.countries).features

            svg.selectAll(".country")
                .data(countries)
                .enter().insert("path")
                .attr("class", "country")
                .attr("d", path)

                /* 그림에 점을 찍는 좌표 데이터 */
                var moscow = [36.2672843, 55.5784905];
                  	sydney = [151.1750583, -33.86783];
                  	london = [-0.12775829999998223, 51.5910899];
                		seoul = [126.8494654, 37.5650172];
                		newyork = [-74.5387542, 40.6971811];

                   console.log(moscow,sydney,london,seoul,newyork);

                    /* 프로젝션한 좌표(점) 부분을 circle로 그린다 */
                  svg.selectAll("circle")
                      .data([moscow,sydney,london,seoul,newyork]).enter()
                      .append("circle")
                  	   .attr("cx", function (d) { return projection(d)[0]; })
                    	 .attr("cy", function (d) { return projection(d)[1]; })
                    	 .attr("r", "7px")
          });
}
