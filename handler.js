var querystring = require('querystring');
function home(response,contactData){
    var htmlfile = '<html>'+
'<head>'+
    '<title>Home</title>'+
'</head>'+
'<body>'+
    '<h2>Add Contacts</h2>'+
    '<form action ="/addContact" method="POST">'+
        '<input type="text" name ="fullname" value="fullname">'+
        '<input type="phonenumber" name ="phonenumber" value="phonenumber">'+
        '<input type="submit" name ="submit" value="submit">'+
    '</form>'+
'</body>'+
'</html>';
        response.writeHead(200,{'content-type':'text/html'});
        response.write(htmlfile);
        response.end("");
    console.log("Executing 'home' handler");
    
}

function addContact(response,contactData){
    console.log("Executing 'addContact' handler");
    response.writeHead(200,{'content-type':'text/plain'});
    response.write("Contact saved in  a database");
    response.end();
}
exports.home = home;
exports.addContact = addContact;