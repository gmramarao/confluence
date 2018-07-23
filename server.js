const express = require('express');
const app = express();
const fs = require('fs');
var Confluence = require("confluence-api");
var config = {
    username: "ramarao.g92@gmail.com",
    password: "Grr@7777",
    baseUrl:  "https://avatar-cdn.atlassian.com/d4eb78150c06de4746d040f1915b7391",
    version: 4 // Confluence major version, optional
};
var confluence = new Confluence(config);
app.get('/get/file', (req, res)=>{
    confluence.getContentByPageTitle("space-name", "page-title", function(err, data) {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }

        // do something interesting with data; for instance,
        // data.results[0].body.storage.value contains the stored markup for the first
        // page found in space 'space-name' matching page title 'page-title'
        // console.log(data.req);
    });
})



// var confluence = require('atlassian-confluence');

// confluence.useSSL = false
// confluence.username = 'ramarao.g92@gmail.com';
// confluence.password = 'Grr@7777';
// confluence.host = 'confluence_host.com';
// confluence.port = 9080; // Defaults to 443 if useSSL is true. Otherwise, defaults to 80
// confluence.context = '/wiki'; // Optional

// confluence.simpleSearch('help', { limit : 3 }, function (res) {
//    if (res) {
//     //    res.results.forEach(function(result) {
//     //        console.log(result.title);
//     //    })
//     console.log(res);
//    }
// });



app.listen(3333);
console.log(`server running on port number 3333`);




// var config = {
//     user: "ramarao.g92@gmail.com",
//     password: "Grr@7777",
//     baseUrl:  "https://developer.atlassian.com/confdev/confluence-rest-api/audit"
// };

// var ConfluenceAPI = require("confluence-restapi");

// var confluenceAPI = ConfluenceAPI.create(config);

// // console.log(confluenceAPI);



// var params = {
//     start : 0,
//     limit : 5
// };
// confluenceAPI.content.getContent(params, function(err, data) {
//     if(err){
//         console.log(err);
        
//     } else {
//         // console.log(JSON.stringify(data));
//     }
    
// });
// // confluenceAPI.content.getSpace('space', (err, res)=>{
// //     if(err){
// //         console.log(err);
// //     } else {
// //         console.log(res);
// //     }
// // })
 
// //demo2: create content
// var params = {
//     status : 'current'
// };
// var request = {
//     ancestors: [{
//         id : "1802243"
//     }],
//     body: {
//         "storage": {
//             "value": "<p>This page was created by RESTAPI. Creator: Sam.Li</p>",
//             "representation": "storage"
//         }
//     },
//     space: {
//         key : "TES"
//     },
//     status: "current",
//     title: "This page was created at " + new Date(),
//     type: "page"
// };
// confluenceAPI.content.createContent(params, request, function(err, data) {
//     if(err){
//         console.log(err);
        
//     } else {
//         // console.log(data);
//     }
// });
 
// //demo3: get content by id
// var contentId = '123456789';
// var params = {
//     embeddedContentRender : "current",
//     status: "current"
// };
// confluenceAPI.content.getContentById(contentId, params, function(err, data) {
//    if(err){
//         console.log(err);
        
//     } else {
//         // console.log(JSON.stringify(data));
//     }
    
// });
 
// // //demo4: update content
// var contentId = '123456789';
// var params = {
//     conflictPolicy: "abort",
//     status : 'current'
// };
// var request = {
//     ancestors: [{
//         id : "1802243"
//     }],
//     body: {
//         "storage": {
//             "value": "<p>This page was updated by RESTAPI. Creator: Sam.Li</p><p>Updated at: " + new Date() + "</p>",
//             "representation": "storage"
//         }
//     },
//     space: {
//         key : "TES"
//     },
//     status: "current",
//     title: "This page was updated at " + new Date(),
//     type: "page",
//     version: {
//         number: '1.0.0'+1
//     }
// };
 
// confluenceAPI.content.updateContent(contentId, params, request, function(err, data) {
//     if(err){
//         console.log(err);
//         return;
//     }
//     // console.log(JSON.stringify(data));
// });
 
// //demo5: search with CQL
// var params = {
//     cql: "creator=admin and title ~ \"test*\"",
//     limit: 10,
//     start: 0
// };
// confluenceAPI.search.search(params, function(err, data) {
//    if(err){
//         console.log(err);
//         return;
//     }
//     // console.log(JSON.stringify(data));
// });
 
// //demo6: create attachment
// var contentId = "1802243";
// var params = {
//     status: "current"
// };
// var attachFileName = "./attachment.txt";
// var form = {
//     file : {
//         value:  fs.createReadStream(attachFileName),
//         options: {
//             filename: attachFileName,
//             contentType: 'text/plain'
//         }
//     },
//     comment: "Create attachment",
//     minorEdit: 'false'
// };
 
// confluenceAPI.content.createAttachment(contentId, params, form, function(err, data) {
//     if(err){
//         console.log(err);
        
//     } else {
//        console.log(data);
//     }
    
// });




var Confluence = require("confluence-api");
var config = {
    username: "ramarao.g92@gmail.com",
    password: "Grr@7777",
    baseUrl:  "https://confluence-api-test.atlassian.net/wiki",
    version: 4 // Confluence major version, optional
};
var confluence = new Confluence(config);
confluence.getContentByPageTitle("space-name", "page-title", function(err, data) {
    // do something interesting with data; for instance,
    // data.results[0].body.storage.value contains the stored markup for the first
    // page found in space 'space-name' matching page title 'page-title'
    console.log(data);
});
