var mainModule = require('./index');

const params = 
// {
//   "people": [{"firstname": "james", "lastname": "schimmoeller", "email": "j@j.com"}, {"firstname": "tom", "lastname": "athens", "phone":"9418076677"}], 
//   "dataSourceName": "people",
//   "transform":[{
    
//     "parameterName": "",
//     "transforms":[
//       {
//         "destinationName": "fullName",
//         "transformation": "$.firstname + \" \" + $.lastname " 
//       },
//       {
//         "destinationName": "modality",
//         "transformation": "$.hasOwnProperty(\"email\") ? \"email\" : \"sms\" " 
//       },
//       {
//         "destinationName": "value",
//         "transformation": "$.hasOwnProperty(\"email\") ? $[\"email\"] : $[\"phone\"] " 
//       }
//     ]

//   }]
// };
// {
//   "token": "eyJraWQiOiI1OGRhOWI1MDVjMGE1YTAwMDFlZmIzMDRmYzU0OWQxZGE4YTE0NjM2OTE1OGVmYWJlYTk2ZWViMyIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1Nzg1MjQwMC02NjUwLTQ2NmItYmRjMi1iYzEyOGU2Y2NhY2EiLCJzY3AiOlsiZGVmYXVsdCJdLCJleHAiOjE1NDU0MTMyMzIsImlhdCI6MTU0Mzk0MjAwMywiY2lkIjoibXhvcnpzTGFTS2lPdzkxa1B2T0kiLCJwb2xpY3kiOiI1YzA2YWY2YjZmYWFkODAwMDEyYmFiYjkifQ.kber0Kyc234RHl2jLBXiacjxl6m3FzxetXfZOYO4ihyox8TnNo28holIjB7yoYmh4wagvv6LO8vbiCDX5LINaw",
//   "group_uuid": "8e47c732-8920-4014-a548-117a0695017d",
//   "group_name": "test - 20181204 @ 16:47:16",
//   "dataSourceName": "people.data",
//   "people": {
//       "data": [
//           {
//               "modality": "sms",
//               "name": "James",
//               "value": "9418076677"
//           },
//           {
//               "modality": "email",
//               "name": "j",
//               "value": "jschimmoeller@star2star.com"
//           }
//       ],
//       "message": "data loaded",
//       "status": "completed"
//   },
//   "transform":[{
//     "parameterName": "",
//     "transforms":[
//       {
//         "destinationName": "speechText",
//         "transformation": "'i found alexa length to be: ' + $.length  " 
//       }
//     ]

//   }]
// };


{
  "people": [{"firstname": "james", "lastname": "schimmoeller", "email": "j@j.com"}, {"firstname": "tom", "lastname": "athens", "phone":"9418076677"}], 
  "dataSourceName": "people",
  "transform":[{
    "parameterName": "null",
    "transforms":[
      {
        "destinationName": "fullName",
        "transformation": "$.firstname + \" \" + $.lastname " 
      },
      {
        "destinationName": "modality",
        "transformation": "$.hasOwnProperty(\"email\") ? \"email\" : \"sms\" " 
      },
      {
        "destinationName": "value",
        "transformation": "$.hasOwnProperty(\"email\") ? $[\"email\"] : $[\"phone\"] " 
      }
    ]

  }]
};
mainModule.main(params).then(function(d){
  console.log('result out was:', JSON.stringify(d, null, 3) );

}).catch(function(e){
  console.error(e);
});
