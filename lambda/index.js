require("babel-polyfill");

function main(params) {
  return new Promise(async (resolve, reject) => {
    let errors = [];
    // validation of params 
    if (!params.hasOwnProperty("transform") ){
      errors = errors.concat("Missing transform");
    } 

    if (errors.length > 0) {
      const myErrorObject = { "status": "error", "message": "The following validation errors where found on parameters: " + errors.join(", ") };
      const varError = new Error(JSON.stringify(myErrorObject));
      reject(varError.toString());
      return;
    } 
    
    // code here 
    let result = {};

    resolve({ "status": "completed", "message": "", "data": result });
  

  });
}

module.exports = {
  "main": main
}
