//Synchronous and Asynchronous Function
//readFile
//writeFile
//AppendFile
//Delete
//Rename


const fs = require("fs");

fs.writeFileSync("Lab_01_180042145/contents/demoFile.txt", "Mohtasim Hadi Rafi"); //had to add an extra folder
fs.appendFileSync("Lab_01_180042145/contents/demoFile.txt", " 180042145");

fs.rename("Lab_01_180042145/contents/demoFile.txt", "Lab_01_180042145/contents/renamedDemoFile.txt", (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Rename Successfull");
    }
});


fs.readFile("Lab_01_180042145/contents/renamedDemoFile.txt", "utf-8", (err, data) =>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});


fs.unlink("Lab_01_180042145/contents/renamedDemoFile.txt", (err)=>{
    if (!err) {
        console.log("Successfully deleted")
    }
});