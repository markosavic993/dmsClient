/**
 * Created by Pejovic on 13.2.2017.
 */
/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("configService", function () {

    var Config = {
        user : undefined,
        company : undefined,
        processes: undefined,
        loggedIn : false,
        successfullySignedUp : false,
        error : false,
        errorMessage: undefined
    }

    return {
        getConfig: getConfig,
        resolveUser: resolveUser,
        resolveError: resolveError
    };

    function getConfig(){
        return Config;
    }

    function resolveUser() {
        Config.user = undefined;
        Config.company = undefined;
        Config.loggedIn = false;
        Config.successfullySignedUp = false;
        Config.processes = undefined;
        Config.error = false;
        Config.errorMessage = undefined;
    }

    function resolveError(){
        Config.error = false;
        Config.errorMessage = undefined;
    }
});