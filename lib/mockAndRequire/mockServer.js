let mockServerClient = require('mockserver-grunt');
mockServerClient.start_mockserver({serverPort: 8080});
 
mockServerClient("localhost", 8080).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/login",
        "body": {
            "type": "JSON",
            "value": JSON.stringify({ Username: "foo", Password: "bar" }),
            "matchType": "STRICT"
        }
    },
    "httpResponse": {
        "statusCode": 200,
        "headers": [
            {
                "name": "Content-Type",
                "values": ["application/json; charset=utf-8"]
            },
            {
                "name": "Cache-Control",
                "values": ["public, max-age=86400"]
            }
        ],
        "body": JSON.stringify({ Auth: "Denied" }),
        "delay": {
            "timeUnit": "SECONDS",
            "value": 1
        }
    }
}); 
mockserverClient.stop_mockserver({serverPort: 8080});
/////////////////////////////////////////////////////Denied\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// mockServerClient("localhost", 8080).mockAnyResponse({
//     "httpRequest": {
//         "method": "POST",
//         "path": "/login",
//         "body": {
//             "type": "JSON",
//             "value": JSON.stringify({ Username: "foo", Password: "bar" }),
//             "matchType": "STRICT"
//         }
//     },
//     "httpResponse": {
//         "statusCode": 200,
//         "headers": [
//             {
//                 "name": "Content-Type",
//                 "values": ["application/json; charset=utf-8"]
//             },
//             {
//                 "name": "Cache-Control",
//                 "values": ["public, max-age=86400"]
//             }
//         ],
//         "body": JSON.stringify({ Auth: "Denied" }),
//         "delay": {
//             "timeUnit": "SECONDS",
//             "value": 1
//         }
//     }
// });


/////////////////////////////////////////////SUCCCES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// mockServerClient("localhost", 8080).mockAnyResponse({
//     "httpRequest": {
//         "method": "POST",
//         "path": "/login",
//         "body": {
//             "type": "JSON",
//             "value": JSON.stringify({ Username: "User", Password: "Password" }),
//             "matchType": "STRICT"
//         }
//     },
//     "httpResponse": {
//         "statusCode": 200,
//         "headers": [
//             {
//                 "name": "Content-Type",
//                 "values": ["application/json; charset=utf-8"]
//             },
//             {
//                 "name": "Cache-Control",
//                 "values": ["public, max-age=86400"]
//             }
//         ],
//         "body": JSON.stringify({ Auth: "Logged", Language: "EN" }),
//         "delay": {
//             "timeUnit": "SECONDS",
//             "value": 1
//         }
//     }
// });