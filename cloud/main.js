
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendEquipmentRequest", function(request, response) {

    var Mailgun = require('mailgun'),
        email = request.params["email"],
        serverUrl = request.params["serverFileUrl"] || "EMPTY";

        Parse.Config.get().then(function(config) {
            if(!config.get("production")) {
                email = "erikj54+equipment@gmail.com";
            }
        }).then(function() {

            Mailgun.initialize('app.ipsems.com', 'aaabe5725bd2d9653db1ae11521a9169');

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

        }, function(error) {
            response.error(error);
        });



   });

Parse.Cloud.define("sendSignupNotification", function(request, response) {

    var Mailgun = require('mailgun'),
    email = request.params["email"],
    user = request.params["username"];

        Parse.Config.get().then(function(config) {
            if(!config.get("production")) {
                email = email + "," + "erikj54+signup@gmail.com";
            }
        }).then(function() {

            Mailgun.initialize('app.ipsems.com', 'aaabe5725bd2d9653db1ae11521a9169');

            Mailgun.sendEmail({
                    to: email,
                    from: "app@ipsems.com",
                    subject: "Signup Notification",
                    text: "A new signup is requested by: " + user + ".\n" +
                    "Please enable be operning the admin panel: https://app.adminca.com/panels/86/"
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

        }, function(error) {
            response.error(error);
        });

});



Parse.Cloud.define("sendFieldOrder", function(request, response) {

    var Mailgun = require('mailgun'),
        email = request.params["email"],
        serverUrl = request.params["serverFileUrl"] || "EMPTY";

        Parse.Config.get().then(function(config) {
            if(!config.get("production")) {
                email = email + "," + "erikj54+fieldorder@gmail.com";
            }
        }).then(function() {

            Mailgun.initialize('app.ipsems.com', 'aaabe5725bd2d9653db1ae11521a9169');

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

        }, function(error) {
            response.error(error);
        });

});

Parse.Cloud.define("sendBillingForm", function(request, response) {

    var Mailgun = require('mailgun'),
        email = request.params["email"],
        serverUrl = request.params["serverFileUrl"] || "EMPTY";

        Parse.Config.get().then(function(config) {
            if(!config.get("production")) {
                email = email + "," + "erikj54+billingfomr@gmail.com";
            }
        }).then(function() {

            Mailgun.initialize('app.ipsems.com', 'aaabe5725bd2d9653db1ae11521a9169');

            Mailgun.sendEmail({
                    to: email,
                    from: "app@ipsems.com",
                    subject: "IPS Billing Form",
                    text: "A new billing form is now available at the following URL: " + serverUrl
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

        }, function(error) {
            response.error(error);
        });

});

