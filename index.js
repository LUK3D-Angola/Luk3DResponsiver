
window.LUK3D = {};
LUK3D.responsivize = function (command){
    var result = [];
    Object.entries(LUK3D.breackpoints).map(point=>{

        var sections = command.split("}");
        var line = `@media (min-width: ${point[1]}) {\n\n`;

        sections.forEach((element,index) => {
            line += element.split("#point").join(point[0]) +"\n}";
        });
        
        result.push(line+ "\n");
    });

    return result.join("\n");
}

LUK3D.breackpoints = {"xs":0, "sm":"640px","md":"768px","lg":"1024px","xl":"1280px"};


function run (){
   
    var code = document.getElementsByTagName("textarea")[0].value;

   console.log(LUK3D.responsivize(code));  
    
}


