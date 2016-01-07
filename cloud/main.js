
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendEquipmentRequest", function(request, response) {

    var Mailgun = require('mailgun'),
        email = request.params["email"] || "erikj54@gmail.com",
        serverUrl = request.params["serverFileUrl"] || "EMPTY";

    Mailgun.initialize('sandboxe18e09b70b64409397d1dee349003f55.mailgun.org', 'key-aaabe5725bd2d9653db1ae11521a9169');

    Mailgun.sendEmail({
            to: email,
            from: "app@ipsems.com",
            subject: "IPS Equipment Request",
            text: "A new equipment request is now available at the following URL: " + serverUrl
        },{
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

Parse.Cloud.define("sendFieldOrder", function(request, response) {

    var Mailgun = require('mailgun'),
        email = request.params["email"] || "erikj54@gmail.com",
        serverUrl = request.params["serverFileUrl"] || "EMPTY";

    Mailgun.initialize('sandboxe18e09b70b64409397d1dee349003f55.mailgun.org', 'key-aaabe5725bd2d9653db1ae11521a9169');

    Mailgun.sendEmail({
            to: email,
            from: "app@ipsems.com",
            subject: "IPS Field Order Form",
            text: "A new field order request is now available at the following URL: " + serverUrl
        },{
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

