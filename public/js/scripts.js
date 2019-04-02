// Storing data:
// mySampleData = 
//     {
//         name: "Phil", 
//         age: 25, 
//         city: "New York"
//     };
// myJSON = JSON.stringify(mySampleData);
// localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("data.json");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.branch["branch"];