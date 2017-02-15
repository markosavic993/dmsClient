/**
 * Created by Pejovic on 13.2.2017.
 */
/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("configService", function () {

    var Config = {
        username : '',
        company : null,
        loggedIn : false,
        successfullySignedUp : false
    }

    return {
        getConfig: getConfig,
        resolveUser: resolveUser
    };

    function getConfig(){
        return Config;
    }

    function resolveUser() {
        Config.username = '';
        Config.company = null;
        Config.loggedIn = false;
        Config.successfullySignedUp = false;

    }
});