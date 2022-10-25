
/*module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {*/
        // status: 200, /* Defaults to 200 */
        //body: responseMessage
   // };
//}

const querystring = require('querystring');

module.exports = async function (context,req) {
    console.log('JavaScript HTTP trigger function processed a request.');
    const body = querystring.parse(req.params);
    const name = body.name
    const email = body.email;
    const password = body.password;
    console.log(name,email,password)
    console.log(req.params)
    context.res = {
         status: 200, 
         body: 'responseMessage'}
};