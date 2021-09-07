window.LUK3D = {};

LUK3D.breackpoints = {"xs":0, "sm":"640px","md":"768px","lg":"1024px","xl":"1280px"};

LUK3D.responsivize = function (command){
    var result = [];
    var sections = command.split("}");
   
    sections.forEach((element,index) => {
        result.push(element.split("#point-").join("") +"\n}");
    });

    Object.entries(LUK3D.breackpoints).map(point=>{

      
        var line = `@media (min-width: ${point[1]}) {\n\n`;

        sections.forEach((element,index) => {
            line += element.split("#point").join(point[0]) +"\n}";
        });
        
        result.push(line+ "\n");
    });

    return result.join("\n");
}




function run (){
   
    var code = document.getElementsByTagName("textarea")[0].value;

   console.log(LUK3D.responsivize(code));  
    
}


