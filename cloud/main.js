
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendEmail", function(request, response) {

    var Mailgun = require('mailgun'),
        email = request['email'] || "erikj54@gmail.com";

    Mailgun.initialize('sandboxe18e09b70b64409397d1dee349003f55.mailgun.org', 'key-aaabe5725bd2d9653db1ae11521a9169');

    Mailgun.sendEmail({
            to: email,
            from: "Mailgun@CloudCode.com",
            subject: "IPS Mobile Submission",
            text: "Test mobile submission, information to be attached"
        }, {
            success: function(httpResponse) {
                console.log(httpResponse);
                response.success("Email sent!");
            },
            error: function(httpResponse) {
                console.error(httpResponse);
                response.error("Uh oh, something went wrong");
            }
    });
});


