/////////table and chart
 function drawchart(mydata) {
     var mydatapoints = new Array(mydata.length);
     for(var i=0;i<mydata.length;i++){
            
            mydatapoints[i] = {y: mydata[i], label: i};
          }
     
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Color Class Size Distribution"    
      },
      animationEnabled: true,
      axisY: {
        title: "Num of Vertex"
      },
      axisX: {
        title: "Color ID"
      },
      
      /**
        legend: {
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },**/
      theme: "theme2",
      data: [

      {        
        type: "column",  
        //showInLegend: true, 
        //legendMarkerColor: "grey",
        //legendText: "MMbbl = one million barrels",
        dataPoints: mydatapoints     
        
      }   
      ]
    });

    chart.render();
  }


function drawDegree( fororiginal,fordelete) {
  
  
  var len = fordelete.length;
  var originaldata = new Array(fororiginal.length);
     for(var i=0;i<len;i++){
            
            originaldata[i] = { x: i, y: fororiginal[i]};
          }
  
  var deletedata = new Array(fordelete.length);
     for(var j=0;j<len;j++){
            
            deletedata[j] = {x: j, y: fordelete[j] };
          }
  
  
  
		var chart = new CanvasJS.Chart("chartContainer",
		{

			title:{
				text: "Sequential Plot",
				fontSize: 30
			},
                        animationEnabled: true,
			axisX:{

				gridColor: "Silver",
				tickColor: "silver",
				//valueFormatString: "DD/MMM"

			},                        
                        toolTip:{
                          shared:true
                        },
			theme: "theme2",
			axisY: {
				gridColor: "Silver",
				tickColor: "silver"
			},
			legend:{
				verticalAlign: "center",
				horizontalAlign: "right"
			},
			data: [
			{        
				type: "line",
				showInLegend: true,
				lineThickness: 2,
				name: "Original Degree",
				markerType: "square",
				color: "#F08080",
				dataPoints: originaldata
			},
			{        
				type: "line",
				showInLegend: true,
				name: "Degree when Deleted",
				color: "#20B2AA",
				lineThickness: 2,

				dataPoints: deletedata
			}

			
			],
      
          legend:{
            cursor:"pointer",
            itemclick:function(e){
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              	e.dataSeries.visible = false;
              }
              else{
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
          
		});

  chart.render();
 
}

/////////////////////////////////////////
//setInterval(drawDot, 50);
//**-----------------------------**/
/*****  Border of the Square  *****/
/**------------------------------**/
function drawBorder(){
  var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.moveTo(8, 8);
  ctx.lineWidth = 0.5;
  ctx.lineTo(8,512);
  ctx.lineTo(512,512);
  ctx.lineTo(512,8);
  ctx.lineTo(8,8);
  ctx.strokeStyle = "LightGray";
  ctx.stroke();
}


function drawborderD(){
  var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
  
  ctx.beginPath();
   ctx.arc(260, 260, 250, 0, 2 * Math.PI);
  ctx.strokeStyle = "LightGray";
  ctx.stroke();
}
//**-----------------------**/
/*****  Vertex drawing  *****/
/**------------------------**/
function drawDot(mygraph){

	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	
for(var i=0;i<num;i++){
		
		var dotX = mygraph[i].x; 
		var dotY = mygraph[i].y;  
		
		ctx.beginPath();
	  ctx.fillStyle = 'yellow';	
    ctx.arc(dotX, dotY, 1, 0, 2 * Math.PI);
	  ctx.fill();
  
    //ctx.fillStyle = 'pink';
    //ctx.fillText(i,dotX+3,dotY+3);	
    
		//ctx.fill();
	}
}


function drawMaxMin(mygraph, orderedlist, adjacentlist){
  var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
  
  var dotMax = orderedlist[0][0];
  var dotMin = orderedlist[num-1][0];
  //draw max dot
    ctx.beginPath();
		ctx.arc(mygraph[dotMax].x, mygraph[dotMax].y, 4, 0, 2 * Math.PI);
		ctx.fillStyle = 'RED';
		ctx.fill();
  
    //ctx.fillStyle = 'RED';
    //ctx.fillText(mygraph[dotMax].vertexId,mygraph[dotMax].x+3,mygraph[dotMax].y+3);
  /////////////draw max edge
  for(var j=0; j<adjacentlist[dotMax].length;j++){
        ctx.beginPath();
        ctx.moveTo(mygraph[dotMax].x, mygraph[dotMax].y);
        ctx.lineWidth = 0.5;
        ctx.lineTo(mygraph[adjacentlist[dotMax][j]].x, mygraph[adjacentlist[dotMax][j]].y);
        ctx.strokeStyle = "RED ";
        ctx.stroke();
  }
  ///////draw min vertex
    ctx.beginPath();
    ctx.arc(mygraph[dotMin].x, mygraph[dotMin].y, 4, 0, 2 * Math.PI);
		ctx.fillStyle = 'GREENYELLOW';
		ctx.fill();
  
    //ctx.fillStyle = 'GREENYELLOW';
    //ctx.fillText(mygraph[dotMin].vertexId,mygraph[dotMin].x+3,mygraph[dotMin].y+3);
  //////draw min edges
  for(var i=0; i<adjacentlist[dotMin].length;i++){
        ctx.beginPath();
        ctx.moveTo(mygraph[dotMin].x, mygraph[dotMin].y);
        ctx.lineWidth = 0.5;
        ctx.lineTo(mygraph[adjacentlist[dotMin][i]].x, mygraph[adjacentlist[dotMin][i]].y);
        ctx.strokeStyle = "GREENYELLOW ";
        ctx.stroke();
  }
  
}

function drawColorDot(arrangebycolor,mygraph,rgblist){

	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	
	for(var i=0;i<arrangebycolor.length;i++){
		var crtColor=rgblist[i];
		for(var j=0;j<arrangebycolor[i].length;j++){
			
			var dotX = mygraph[arrangebycolor[i][j]].x; 
			var dotY = mygraph[arrangebycolor[i][j]].y;  
			
			ctx.beginPath();
			ctx.arc(dotX, dotY, 1.2, 0, 2 * Math.PI);
			ctx.fillStyle = crtColor;
			ctx.fill();
      
      //ctx.fillStyle = crtColor;
      //ctx.fillText(mygraph[arrangebycolor[i][j]].vertexId,dotX+3,dotY+3);
		}
	}
}

//////////////////

function drawBackboneDot1(backbonecolor,mygraph,arrangebycolor){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	///backbonecolor=[ 8, [ 0, 3 ] ], [0,3]is the two color
	var color1 = backbonecolor[1][0];
	var color2 = backbonecolor[1][1];
	
	//draw color1
	for(var i=0;i<arrangebycolor[color1].length;i++){
		
		var dotX1 = mygraph[arrangebycolor[color1][i]].x; 
		var dotY1 = mygraph[arrangebycolor[color1][i]].y;  
		
		ctx.beginPath();
		ctx.arc(dotX1, dotY1, 2, 0, 2 * Math.PI);
		ctx.fillStyle = "Fuchsia ";
		ctx.fill();
    
    //ctx.fillStyle = 'Fuchsia';
    //ctx.fillText(mygraph[arrangebycolor[color1][i]].vertexId,dotX1+3,dotY1+3);
	}
	//draw color 2
for(var j=0;j<arrangebycolor[color2].length;j++){
		
		var dotX2 = mygraph[arrangebycolor[color2][j]].x; 
		var dotY2 = mygraph[arrangebycolor[color2][j]].y;  
		
		ctx.beginPath();
		ctx.arc(dotX2, dotY2, 2, 0, 2 * Math.PI);
		ctx.fillStyle = "Cyan";
		ctx.fill();
  
  //ctx.fillStyle = 'Cyan';
    //ctx.fillText(mygraph[arrangebycolor[color2][j]].vertexId,dotX2+3,dotY2+3);
	}
	
}



function drawBackboneDot2(backbonecolor,mygraph,arrangebycolor){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	///backbonecolor=[ 8, [ 0, 3 ] ], [0,3]is the two color
	var color1 = backbonecolor[1][0];
	var color2 = backbonecolor[1][1];
	
	//draw color1
	for(var i=0;i<arrangebycolor[color1].length;i++){
		
		var dotX1 = mygraph[arrangebycolor[color1][i]].x; 
		var dotY1 = mygraph[arrangebycolor[color1][i]].y;  
		
		ctx.beginPath();
		ctx.arc(dotX1, dotY1, 2, 0, 2 * Math.PI);
		ctx.fillStyle = "LawnGreen  ";
		ctx.fill();
    
    //ctx.fillStyle = 'LawnGreen';
    //ctx.fillText(mygraph[arrangebycolor[color1][i]].vertexId,dotX1+3,dotY1+3);
	}
	
for(var j=0;j<arrangebycolor[color2].length;j++){
		
		var dotX2 = mygraph[arrangebycolor[color2][j]].x; 
		var dotY2 = mygraph[arrangebycolor[color2][j]].y;  
		
		ctx.beginPath();
		ctx.arc(dotX2, dotY2, 2, 0, 2 * Math.PI);
		ctx.fillStyle = "Gold ";
		ctx.fill();
  
   //ctx.fillStyle = 'Gold';
    //ctx.fillText(mygraph[arrangebycolor[color2][j]].vertexId,dotX2+3,dotY2+3);
	}
	
}
//**-----------------------**/
/*****  Edge drawing  *****/
/**------------------------**/
function drawEdge(orderedlist, mygraph){
  
  var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
  
  for(var i=1;i<num;i++){
    var startX = mygraph[orderedlist[i][0]].x;
    var startY = mygraph[orderedlist[i][0]].y;
    
    var numtodraw = orderedlist[i][1].length;
    
      for(var j=0;j<numtodraw; j++ ){
        
        var endX = mygraph[orderedlist[i][1][j]].x;
        var endY = mygraph[orderedlist[i][1][j]].y;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineWidth = 0.5;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = "LightSkyBlue ";
        ctx.stroke();
      }
   }
 }
 


function  drawBkbEdge(backbone,adjacentlist, arrangebycolor, mygraph){//backbone: [ 6, [ 4, 1 ]
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	
			var color1 = backbone[1][0];
			var color2 = backbone[1][1];
						
			var set1 = arrangebycolor[color1];
			var set2 = arrangebycolor[color2];
			
			var lenOfSet1 = set1.length;
			
  	// find if vertex in set2 is the neighborlist of each vertex in set1
			
			for(var k=0;k<lenOfSet1;k++){  //traverse the vertex in set1, find neighborlist 
				var cntVin1 = set1[k];
				var neighborList = adjacentlist[cntVin1];
					
					for(var l=0; l< set2.length;l++){   //traverse the vertex in set2
						var cntVin2 = set2[l];
						var index = neighborList.indexOf(cntVin2);
						
						if(index >= 0){   //not only greater than 0
							/////draw if exist
							var startX = mygraph[cntVin2].x;
						    var startY = mygraph[cntVin2].y;
							var endX = mygraph[cntVin1].x;
					        var endY = mygraph[cntVin1].y;
					        
					        ctx.beginPath();
					        ctx.moveTo(startX, startY);
					        ctx.lineWidth = 0.5;
					        ctx.lineTo(endX, endY);
					        ctx.strokeStyle = "LightPink ";
					        ctx.stroke();		
             
						}
					}
			}
}




function  findEdgeNum(backbone,adjacentlist, arrangebycolor, mygraph){//backbone: [ 6, [ 4, 1 ]
	
			var color1 = backbone[1][0];
			var color2 = backbone[1][1];
						
			var set1 = arrangebycolor[color1];
			var set2 = arrangebycolor[color2];
			
			var lenOfSet1 = set1.length;
			
  var numOfEdge = 0;
			// find if vertex in set2 is the neighborlist of each vertex in set1
			
			for(var k=0;k<lenOfSet1;k++){  //traverse the vertex in set1, find neighborlist 
				var cntVin1 = set1[k];
				var neighborList = adjacentlist[cntVin1];
					
					for(var l=0; l< set2.length;l++){   //traverse the vertex in set2
						var cntVin2 = set2[l];
						var index = neighborList.indexOf(cntVin2);
						
						if(index >= 0){   //not only greater than 0
							
							 numOfEdge++;
						}
					}
			}
  return numOfEdge;
}
/**-------------------------**/
/******  Clear MyCanvas  *****/
/**-------------------------**/
function clearCanvas(){
  var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
  ctx.clearRect(9, 9, 502, 502);
  
}

/////////////////////////////////////////

/**-----------------------------------------**/
/*****  Vertex----Class/Prototype/Object  *****/
/**------------------------------------------**/
function Vertex(x, y, vertexId){

	this.x = x;
	this.y = y;
	this.vertexId = vertexId;
	this.degree = 0;					// default value
	this.listOfVertices = [];  // array of vertices connected
	this.color = undefined;

}

/**---------------------------------------------------**/
/*****  Initialize the graph wit hrandom vertices  *****/
/**---------------------------------------------------**/
function graph(){
	
	var mygraph = new Array(num);
  //var mygraph=[];
	for(var i = 0;i < num;i++){
		var dotX = getRandomNum();
		var dotY = getRandomNum();  
		//mygraph.push(new Vertex(dotX, dotY, i));
    mygraph[i] = new Vertex(dotX, dotY, i);
	 }
	return mygraph;  //it is very important to have the 'return'
}

function graphForDisk(){
  //var mygraph = [];
  var mygraph = new Array(num);
  var count=0;
  var r_disk = 250;
  
  while(count<num){
		var dotX = getRandomNum();
		var dotY = getRandomNum(); 
    var d = Math.sqrt( Math.pow((dotX - 260), 2) + Math.pow((dotY - 260), 2));
    if(d<=250){
      
      //mygraph.push(new Vertex(dotX, dotY, count));
      mygraph[count] = new Vertex(dotX, dotY, count);
      count++;
      
    }
		
	 }
  return mygraph;
  
}


/**----------------------------------**/
/******  Generate random numbers  *****/
/**----------------------------------**/
function getRandomNum(){
	  return (Math.random() * 500) + 10; /**between 10 and 510 (inclusive)**/
	}


//console.log(myGraph);

/**-------------------------------------------------------**/
/******  Claculate the distances between the vertices  *****/
/**-------------------------------------------------------**/
function calDistance(mygraph,my_r){
	var d;
	
	//var graphWithEdge = Object.assign({},mygraph);
	for(var i=0; i<num; i++){
		for(var j=i+1; j<num;j++){
			d = Math.sqrt( Math.pow((mygraph[i].x - mygraph[j].x), 2) + Math.pow((mygraph[i].y - mygraph[j].y), 2));
			//console.log(d);
			if(d <= my_r){
				mygraph[i].listOfVertices.push(mygraph[j].vertexId);
        //mygraph[i].listOfVertices[mygraph[i].listOfVertices.length]= mygraph[j].vertexId;
				mygraph[j].listOfVertices.push(mygraph[i].vertexId);
        //mygraph[j].listOfVertices[mygraph[j].listOfVertices.length]=mygraph[i].vertexId;
				edge_num ++;
			}
		}
	}
	
	//var adjacentlistrecord=[];
  var adjacentlistrecord = new Array(num);
	for(var k=0;k<num;k++){
		//adjacentlistrecord.push(mygraph[k].listOfVertices);
    adjacentlistrecord[k] = mygraph[k].listOfVertices;
	}
	
	
		return [mygraph, adjacentlistrecord];  
}

/**-------------------------------**/
/******  Adjacent List  *****/
/**-------------------------------**/
function setAdjacentList(mygraph){
	//var adjacentList=[];
  var adjacentList = new Array(num);
		for(var i=0;i<num;i++){
			//adjacentList.push(mygraph[i].listOfVertices);
      adjacentList[i]= mygraph[i].listOfVertices;
		}
		//console.log("aaaa");
		//console.log(adjacentList);
	
	
		return adjacentList;
}

/**-------------------------------**/
/******  Generate New Dot Set  *****/
/**-------------------------------**/
/**
function newSet(flag){  //flag=1,square, flag=0,disk
  var newGraphV;
  if(flag){
    drawBorder();
newGraphV = graph();
  }else{
    drawBorderD();
newGraphV = graphForDisk();
  }
   return newGraphV;
}
**/

/**-------------------------------**/
/******  Write the new degree  *****/
/**-------------------------------**/
function setDegree(mygraph){
	//var graphWithDegree = Object.assign({},mygraph);
	for(var i=0;i<num;i++){
		mygraph[i].degree = mygraph[i].listOfVertices.length;
	}
  
	return mygraph;
}

/**-------------------------------**/
/******  Creat the Degree List  *****/
/**-------------------------------**/

function setdegreeList(mygraph){
	//var mydegreeList = [];
	var mydegreeList = new Array(num);
	for(var i=0;i<num;i++){
		var vertexList = [];
		for(var j=0;j<num;j++){
			if(mygraph[j].degree === i){
				//vertexList.push(mygraph[j].vertexId);
        vertexList[vertexList.length] = mygraph[j].vertexId;
				}			
			}
		//mydegreeList.push(vertexList);
		mydegreeList[i] = vertexList;
	}
		
	return mydegreeList;
}

/**-------------------------------**/
/******  Calculate Radius  *****/
/**-------------------------------**/
function calRadius(avg,n){
  
  var r = Math.sqrt(avg/(n * Math.PI) ) * 500;
  return r.toFixed(4);
}

//////////////////////////
//get orderedList
//////////////////////////


function smallestLastOrdering(degreelist, adjacentlist){
	
	
	var orderedList = [];
  //var orderedList = new Array(num);
	var i =0;
	var degreeDeleted = [];
  //var degreeDeleted = new Array(num);
	//console.log(degreelist);
	
	while(i < num){  //traverse the whole degree list  change degree
		
		var currentlist = degreelist[i];//currentlist is the list of vertex with same degree
		var len = currentlist.length;
		
		if( len === 0){
			i++;
		}
		
		
		
		if( len > 0){
			                 //find the first un-empty list, and pick the first item of it
				var alist = [];
				var currentVertex = currentlist[0];
				
				//alist.push(currentVertex);
      alist[alist.length] = currentVertex;
				//alist.push(adjacentlist[currentVertex]);
      alist[alist.length] = adjacentlist[currentVertex];
				orderedList.unshift(alist);
				
				//degreeDeleted.push(adjacentlist[currentVertex].length);
				degreeDeleted[degreeDeleted.length]=adjacentlist[currentVertex].length;
				var result = updateTwoList(currentVertex, adjacentlist, degreelist);
				
				adjacentlist = result[0];
				degreelist = result[1];
				i=0;
				}
		
	}
	//console.log(degreeDeleted);
	// the number of color needs to be prepared
	
	var maxDegreeDeleted = Math.max.apply(null, degreeDeleted);
	return [orderedList,adjacentlist, degreelist,maxDegreeDeleted];
} 



function updateTwoList(vertex, adjacentlist, degreelist){
	var adjacentCopy = copyAdjacent(adjacentlist);
	var neighborlist = adjacentCopy[vertex]; // get the neighborlist of vertex from adjacentlist
	//console.log(neighborlist);
	var lenOfNeighbor = neighborlist.length;
	
	for(var i=0;i<lenOfNeighbor;i++){
		var neighbor = neighborlist[i];
		//the ith neighbor : neighborlist[i]
		//update adjacent list
		//the neighbor list of the ith neighbor, find vertex in its neighbor's neighbor list
		var neighborlistOfNeighbor = adjacentCopy[neighbor];
		var originalDegree = neighborlistOfNeighbor.length;
		var indexOfVertex = neighborlistOfNeighbor.indexOf(vertex);   
		if(indexOfVertex > -1){
			//delete vertex from the neighborlist of its ith neighbor
			neighborlistOfNeighbor.splice(indexOfVertex,1);
			
		}
		//update degree list
		//find the neighbor in the degree list, change it to the degree-1
		var pos = degreelist[originalDegree].indexOf(neighbor);
		degreelist[originalDegree].splice(pos,1); //delete it from the original degree list
		degreelist[originalDegree-1].push(neighbor); //add the neighbor to the new (degree-1) list
		
	}
	var pos_vertex = degreelist[lenOfNeighbor].indexOf(vertex);
	degreelist[lenOfNeighbor].splice(pos_vertex,1);
		return [adjacentCopy, degreelist];
}

/**-------------------------------**/
/****   Copy array of array     ****/
/**-------------------------------**/

function copyAdjacent(adjacentlistrecord){
	//var adjacentlist=[];
  var adjacentlist = new Array(adjacentlistrecord.length);
	for(var i=0;i<adjacentlistrecord.length;i++){
		
	    var len = adjacentlistrecord[i].length;
	    //var adjacentlist_single=[];
    var adjacentlist_single = new Array(len);
		for(var j=0;j<len;j++){
		//adjacentlist_single.push(adjacentlistrecord[i][j]);
      adjacentlist_single[j]=adjacentlistrecord[i][j];
	    }
		//adjacentlist.push(adjacentlist_single);
    adjacentlist[i] = adjacentlist_single;
	}
	return adjacentlist;
	}


function getNum(){
  var mynum = document.getElementById('vertexnum').value;
  var mydegree = document.getElementById('averagedegree').value;
  if(mynum && mydegree){
  num = mynum;
  avgDegree = mydegree;
  }
}

///////////////////
//Coloring Part Code & prepare color
///////////////
/**-------------------------------**/
/******  Coloring              *****/
/**-------------------------------**/
function assignRGB(){
	
	var rgblist= [] ;
	for (var i=0;i<5;i++) {
		for (var j=0;j<5;j++) {
			for (var k=0;k<5;k++) {
				var r=255-i*51;
				var g=255-j*51;
				var b=255-k*51;
				//rgblist.push("rgb(" + r + "," + g + "," + b + ")");
        rgblist[rgblist.length]="rgb(" + r + "," + g + "," + b + ")";
			
            }  
		}			
	}
	return rgblist;
}


function coloring(orderedlist, colorset, mygraph){
	 var numofcolor = colorset.length;
	 //var colorOfVertex = [];
  var colorOfVertex = new Array(num);
	//var colorlistofvertex = []; 
	 
	 mygraph[orderedlist[0][0]].color = 0;
	 //colorlistofvertex[orderedlist[0][0]]=0;
	
	for(var i =0;i<num;i++){
		var currentVertex = orderedlist[i][0];
		var neighborlist = orderedlist[i][1];
		var numOfNeighbor = neighborlist.length;		
		
					
			for(var colorId=0;colorId<numofcolor;colorId++){
				var flag = 0;
			
				for(var k=0;k<numOfNeighbor;k++){				
					if(mygraph[neighborlist[k]].color == colorId){
					//if(colorlistofvertex[neighborlist[k]] == colorId){
						flag=1;
						break;
					}	
				}
				
				if(!flag){
					 mygraph[currentVertex].color = colorId;
					//colorlistofvertex[currentVertex] = colorId;
					colorOfVertex[currentVertex]=colorId;
					
					 //console.log(colorlistofvertex);
					break;
				}
			}
		 
	}
	  return colorOfVertex;
	//return colorlistofvertex;
}
/**-------------------------------**/
/******  Prepare Color         *****/
/**-------------------------------**/

function prepareColor(numOfColor){
	
	var numgen = numOfColor+1;
  //var colorSet = [];
  var colorSet = new Array(numgen);
	for(var i=0;i<numgen;i++){
		//colorSet.push(i);
    colorSet[i] = i;
	}
	return colorSet;
	
}

/**-------------------------------**/
/**** Arrange Vertices by color ****/
/**-------------------------------**/

function arrangeByColor(mygraph, colorset){
	var arrangedByColor=[];
	var numofcolor = colorset.length;
	
	for(var i =0;i<numofcolor;i++){  // color i
		var vertexOfSameColor = [];
		for(var j=0;j<num;j++){
			if(mygraph[j].color === i){
				//vertexOfSameColor.push(mygraph[j].vertexId);	
        vertexOfSameColor[vertexOfSameColor.length]=mygraph[j].vertexId;
			}
		}
		//arrangedByColor.push(vertexOfSameColor);
    arrangedByColor[arrangedByColor.length] = vertexOfSameColor;
	}
	//console.log("ssssss");
	//console.log(arrangedByColor);
	return arrangedByColor;
	
}

////////////////////////////////////////
//backbone selection
/////////////////////////////////////////
function comparator(a, b) {
	   if (a[0] < b[0]) return 1;
	   if (a[0] > b[0]) return -1;
	   return 0;
	 }

function lenwithcolor(arrangedList ){
	//find the first 4 largest color set
  var len = arrangedList.length;
	var lenWithColor=new Array(len);
  var forplot=new Array(len);
	for(var i=0;i<len;i++){
		//lenWithColor.push([arrangedList[i].length,i]);
    lenWithColor[i] = [arrangedList[i].length,i];
    forplot[i] = arrangedList[i].length;
	}
	return [lenWithColor, forplot];
}





function  bipartiteSubgraph(largestfour,adjacentlist, arrangebycolor){
	
	var bipartitesubgraph= [];
	for(var i=0; i<4; i++){    //take a set
		for(var j=i+1; j<4; j++){ // take another set
			
			var color1 = largestfour[i];
			var color2 = largestfour[j];
			var setPair = [color1,color2];
			var set1 = arrangebycolor[color1];
			var set2 = arrangebycolor[color2];
			var lenOfSet1 = set1.length;
			var count=0;
			
			// find if vertex in set2 is the neighborlist of each vertex in set1
			
			for(var k=0;k<lenOfSet1;k++){  //traverse the vertex in set1, find neighborlist 
				var cntVin1 = set1[k];
				var neighborList = adjacentlist[cntVin1];
					
					for(var l=0; l< set2.length;l++){   //traverse the vertex in set2
						var cntVin2 = set2[l];
						var index = neighborList.indexOf(cntVin2);
						
						if(index >= 0){   //not only greater than 0
							count++;
						}
					}
			}
			var setpairWithEdge = [count,setPair];
			//bipartitesubgraph.push(setpairWithEdge);
      bipartitesubgraph[bipartitesubgraph.length] = setpairWithEdge;
		}
			
	}
	
	return bipartitesubgraph;	//num in [0,1] represent the color
}
////////////////////////////
//calculate coverage

function coverageCal(finalcolorset, arrangebycolor, adjacentlist){
	
	var set1 = arrangebycolor[finalcolorset[1][0]];
	var set2 = arrangebycolor[finalcolorset[1][1]];
	
	var len1 = set1.length;
	var len2 = set2.length;
  
  var total = 0;
	
	var cover=[];
	for(var i=0;i<len1;i++){
		var crtVneighbor1 = adjacentlist[set1[i]];
		//cover.push(crtVneighbor1.slice(0));		
      //cover.push(crtVneighbor1);
    cover[cover.length] = crtVneighbor1;
    total += crtVneighbor1.length;
	}
	for(var j=0;j<len2;j++){
		var crtVneighbor2 = adjacentlist[set2[j]];
		//cover.push(crtVneighbor2.slice(0));	
    //cover.push(crtVneighbor2);
    cover[cover.length] = crtVneighbor2;
    total += crtVneighbor2.length;
	}
	
	return [cover, total];
}


function cal(cover){
	var len = cover[0].length;
	//var coverDuplicate = [];
  var coverDuplicate = new Array(cover[1]);
  var cnt=0;
  
	for(var i=0;i<len;i++){
		for(var j=0;j<cover[0][i].length;j++){
			//coverDuplicate.push(cover[0][i][j]);
      coverDuplicate[cnt] = cover[0][i][j];
      cnt++;
		}
	}
	//console.log(coverDuplicate);
	
	var cover_unique = coverDuplicate.filter(function(elem, index, self) {
	    return index == self.indexOf(elem);
	});
	//console.log(cover_unique);
	var numOfCover = cover_unique.length;
	var coverage = (numOfCover/num)*100;
	return coverage.toFixed(4);
}


function edgeNum(orderedlist){
  var edgenum=0;
  for(var i=0;i<(orderedlist.length-1);i++){
    edgenum += orderedlist[i][1].length;    
  }
  return edgenum;
}



///for plotting



function originalDegree(adjacentlist, orederedlist){
	var len = adjacentlist.length;
	var correspondingorigi = new Array(len);
	for(var i=0;i<len;i++){
		correspondingorigi[i]=adjacentlist[orederedlist[i][0]].length;
		
	}
	return correspondingorigi;
}



function deletedplot(orderedlist){
	var len = orderedlist.length;
	var deleteddegree = new Array(len);
	for(var i=0;i<len;i++){
		deleteddegree[i]=orderedlist[i][1].length;
		
	}
	return deleteddegree;
}
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
 






var myFlag=1;
var num = 100;
var avgDegree = 20;
var edge_num = 0;

var radius = calRadius(avgDegree,num);
var actual_average_degree = (2 * edge_num)/ num;
  
var graphOnlyVertex;
 if(myFlag){
   drawBorder();
   graphOnlyVertex = graph();
 }else{
   drawborderD();
   graphOnlyVertex = graphForDisk();
 }
  //only random vertices
 
var graphResult = calDistance(graphOnlyVertex, radius);
var graphVE = graphResult[0];
var adjacentListRecord = graphResult[1];

var graph_current = setDegree(graphVE);    //vertices with edges




var degreeList = setdegreeList(graph_current);

var my_result = smallestLastOrdering(degreeList, adjacentListRecord); 
var maxDegreeWhenDeleted = my_result[3];
var adjacentListChanged = my_result[1];
var orderedList = my_result[0];
//drawDot(graphVE);
//drawEdge(orderedList, graphVE);

/////////////////////
var colorSet = prepareColor(my_result[3]);
var colorresult = coloring(orderedList, colorSet, graph_current);
var arrangeResult = arrangeByColor(graph_current, colorSet);
var numOfColorActual = arrangeResult.length;
var maxDegree = graphVE[orderedList[0][0]].degree;
var minDegree = graphVE[orderedList[num-1][0]].degree;


////////////////



var plotColor = lenwithcolor(arrangeResult);
//console.log(plotColor[1]);
var fourLargest = plotColor[0].sort(comparator).slice(0,4);


var numOfMaxColorSet = fourLargest[0][0];
var largestColorID = fourLargest[0][1];
///function//
function extractItem(fourlargest){
	var largestcolorset = [];
	for(var i=0;i<4;i++){
		largestcolorset.push(fourlargest[i][1]);
	}
	return largestcolorset;
}
///function//

var largest4ColorSet = extractItem(fourLargest);

var bipartitesubgraph = bipartiteSubgraph(largest4ColorSet,adjacentListRecord,arrangeResult);
var finalColor = bipartitesubgraph.sort(comparator).slice(0,2);

var vLargestBkb = arrangeResult[finalColor[0][1][0]].length +arrangeResult[finalColor[0][1][1]].length;

var vertexCovered1 = coverageCal(finalColor[0], arrangeResult, adjacentListRecord);
var coverage1 = cal(vertexCovered1);
var vertexCovered2 = coverageCal(finalColor[1], arrangeResult, adjacentListRecord);
var coverage2 = cal(vertexCovered2);

 var numOfEdge = edgeNum(orderedList);
//var mydata=[ 76, 71, 69, 71, 72, 69, 72, 67, 60, 58, 54, 54, 54, 44, 36, 34, 18, 13, 6, 2, 0 ];         
  //drawchart(mydata);

/////////////////////////
//DOM operation
/////////////////////
document.getElementById("square").onclick = function() {
  myFlag=1;};


document.getElementById("disk").onclick = function() {
  myFlag=0;};


document.getElementById("showmaxmin").onclick = function() {
  drawMaxMin(graphVE, orderedList,adjacentListRecord);
};


document.getElementById("show").onclick = function() {
  
  document.getElementById("demo1").innerHTML=num;
 document.getElementById("demo2").innerHTML=avgDegree;
 document.getElementById("demo3").innerHTML=radius/500;
  /////
   vertexCovered1 = coverageCal(finalColor[0], arrangeResult, adjacentListRecord);
 coverage1 = cal(vertexCovered1);
 vertexCovered2 = coverageCal(finalColor[1], arrangeResult, adjacentListRecord);
 coverage2 = cal(vertexCovered2);
  //////
  document.getElementById("demo4").innerHTML=coverage1+"%";
  document.getElementById("demo5").innerHTML=coverage2+"%";
  
  colorSet = prepareColor(my_result[3]);
  coloring(orderedList, colorSet, graphVE);
  arrangeResult = arrangeByColor(graphVE, colorSet);
  numOfColorActual = arrangeResult.length;
  document.getElementById("demo6").innerHTML=numOfColorActual;
  
  maxDegreeWhenDeleted = my_result[3]; 
  document.getElementById("demo11").innerHTML=maxDegreeWhenDeleted;
  
  maxDegree = graphVE[orderedList[0][0]].degree;
  minDegree = graphVE[orderedList[num-1][0]].degree;
  document.getElementById("demo7").innerHTML=maxDegree;
  document.getElementById("demo8").innerHTML=minDegree;
  numOfEdge = edgeNum(orderedList);
  document.getElementById("demo9").innerHTML=numOfEdge;
  var actual_average_degree = (2 * edge_num)/ num;
  document.getElementById("demo10").innerHTML=actual_average_degree;
  
  
 plotColor = lenwithcolor(arrangeResult);
 fourLargest = plotColor[0].sort(comparator).slice(0,4);
  //forplot missing

 largest4ColorSet = extractItem(fourLargest);

 bipartitesubgraph = bipartiteSubgraph(largest4ColorSet,adjacentListRecord,arrangeResult);
 finalColor = bipartitesubgraph.sort(comparator).slice(0,2);
  
  document.getElementById("demo12").innerHTML=finalColor[0][1] + "      " + finalColor[1][1];
  
  numOfMaxColorSet = fourLargest[0][0];
  largestColorID = fourLargest[0][1];
  document.getElementById("demo13").innerHTML=numOfMaxColorSet +" from Color " + largestColorID;
var vLargestBkb = arrangeResult[finalColor[0][1][0]].length +arrangeResult[finalColor[0][1][1]].length;

document.getElementById("demo15").innerHTML=vLargestBkb;
  var edgeInBkb = findEdgeNum(finalColor[0],adjacentListRecord, arrangeResult, graphVE);
document.getElementById("demo14").innerHTML=edgeInBkb;

};

document.getElementById("chart1").onclick = function() {

  //console.log(mydata);
  drawchart(plotColor[1]);
  //console.log(mydata);
  
//console.log(plotColor[1]);
};
  

document.getElementById("chart2").onclick = function() {
 var fororiginal =  originalDegree(adjacentListRecord, orderedList);
  var fordelete = deletedplot(orderedList);
  
  drawDegree(  fororiginal,fordelete,);

};

document.getElementById("bkb1e").onclick = function() {
   if(myFlag){drawBorder();}else{drawborderD(); }
  
   plotColor = lenwithcolor(arrangeResult);
 fourLargest = plotColor[0].sort(comparator).slice(0,4);
  //forplot missing
  largest4ColorSet = extractItem(fourLargest);
  bipartitesubgraph = bipartiteSubgraph(largest4ColorSet,adjacentListRecord,arrangeResult);
  finalColor = bipartitesubgraph.sort(comparator).slice(0,2);
  
  drawBkbEdge(finalColor[0],adjacentListRecord, arrangeResult, graphVE);};

document.getElementById("bkb2e").onclick = function() {
   if(myFlag){drawBorder();}else{drawborderD(); }
  
  plotColor = lenwithcolor(arrangeResult);
 fourLargest = plotColor[0].sort(comparator).slice(0,4);
  //forplot missing
  largest4ColorSet = extractItem(fourLargest);
  bipartitesubgraph = bipartiteSubgraph(largest4ColorSet,adjacentListRecord,arrangeResult);
  finalColor = bipartitesubgraph.sort(comparator).slice(0,2);
  
  drawBkbEdge(finalColor[1],adjacentListRecord, arrangeResult, graphVE);};

document.getElementById("bkb1v").onclick = function() {
   if(myFlag){drawBorder();}else{drawborderD(); }
  colorSet = prepareColor(my_result[3]);
  coloring(orderedList, colorSet, graphVE);
  arrangeResult = arrangeByColor(graphVE, colorSet);
  drawBackboneDot1(finalColor[0],graphVE,arrangeResult);};


document.getElementById("bkb2v").onclick = function() {
   if(myFlag){drawBorder();}else{drawborderD(); }
  
  colorSet = prepareColor(my_result[3]);
  coloring(orderedList, colorSet, graphVE);
  arrangeResult = arrangeByColor(graphVE, colorSet);
  drawBackboneDot2(finalColor[1],graphVE,arrangeResult);};

document.getElementById("drawV").onclick = function() {drawDot(graphVE);};

document.getElementById("colorV").onclick = function() {
  //clearCanvas();
  colorSet = prepareColor(my_result[3]);
  coloring(orderedList, colorSet, graphVE);
  arrangeResult = arrangeByColor(graphVE, colorSet);
  var rgbList= assignRGB();
  drawColorDot(arrangeResult,graphVE,rgbList);};

document.getElementById("drawE").onclick = function() {drawEdge(orderedList, graphVE);};

document.getElementById("clear").onclick = function() {clearCanvas();};

document.getElementById("newSet").onclick = function() {
  
          if(myFlag){
            clearCanvas();
           drawBorder();
            edge_num=0;
           graphOnlyVertex = graph();
         }else{
           clearCanvas();
           drawborderD();
           edge_num=0;
           graphOnlyVertex = graphForDisk();
         }
      //var newgraphresult = calDistance(newSet(), radius);
      graphresult = calDistance(graphOnlyVertex, radius);
  

      //graphVE = newgraphresult[0]; 
      graphVE = graphresult[0];
      //adjacentListRecord = newgraphresult[1];
      adjacentListRecord = graphresult[1];
      graph_current = setDegree(graphVE);  
      degreeList = setdegreeList(graphVE);

      my_result = smallestLastOrdering(degreeList, adjacentListRecord); 
      adjacentListChanged = my_result[1];
      orderedList = my_result[0];
};

document.getElementById("getnum").onclick = function() {
  getNum();
  radius = calRadius(avgDegree,num);};
//console.log(edge_num,radius/500);




