const fs = require("fs");
const  inquirer =  require("inquirer");
const path = require("path");
const genertateMarkdown = require("./utils/generateMarkdown");


const questions = [

{
type:"input",
name:"title",
message:"What is the name of your project .", 
},
{
type:"input",
name:"Description",
message: "please describe the functionality of your project",

},
{
type:"input",
name:"link",
message:"please enter a url where a user can see your deployed application .",
},
{
            type:"list",                                    
            name:"license",
            message:"please select a license applicable to this application .",
            choices:["MIT","BSD2","none","Apache","Boost","BSD","Creative Commons",
            "Eclipse","GNU","IBM","ISC","Mozilla","Perl","SIL","Unlicense","WTFPL","Zlib"]
    },
    {
        type:"input",
        name:"require",
        message:"list any dependencies used for this project .",
        },
 {
 type:"input",
 name:"features",
 message:"list some features about this project that you would want the user to know .",
  },
  {
 type:"input",
 name:"usage",
     message:"please list the technologies used for this project .",
     },
     {
        type:"input",
        name:"creator",
        message:"write your github username here .",
        },
        
        {
            type:"input",
            name:"email",
            message:"please provide a valid email here  .",
            },
            {
                type:"input",
                name:"contributors",
                message:"please list any contributors here (use github usernames) .",
                },
                  {
type : 'input',
name: 'installation',
message:'please provide any installation steps required'

 } ,
{
type:'input',
name:'tests',
message:'please provide any tests used on this project'


}               ];



function writeToFile (fileName, data){
return fs.writeFileSync(path.join(process.cwd(),fileName),data);


}
function init(){
inquirer.prompt(questions).then((responses)=>{
writeToFile("./dist/README.md",genertateMarkdown({...responses}));


});

}
init();










    
    






