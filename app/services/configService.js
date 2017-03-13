/**
 * Created by Pejovic on 13.2.2017.
 */
/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("configService", function () {

    var Config = {
        user: undefined,
        company: undefined,
        processes: undefined,
        loggedIn: false,
        successfullySignedUp: false,
        error: false,
        errorMessage: undefined,
        structuredProcesses: undefined,
        allocatedProcesses: undefined,
        documentTypes: undefined,
        complexProcesses: undefined
    }

    return {
        getConfig: getConfig,
        resolveUser: resolveUser,
        resolveError: resolveError,
        restructureProcesses: restructureProcesses,
        retrieveComplexProcesses: retrieveComplexProcesses
    };

    function getConfig() {
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
        Config.structuredProcesses = undefined;
        Config.allocatedProcesses = undefined;
        Config.documentTypes = undefined;
        Config.complexProcesses = undefined;
    }

    function resolveError() {
        Config.error = false;
        Config.errorMessage = undefined;
    }

    function retrieveComplexProcesses(){
        Config.complexProcesses = [];
        Config.complexProcesses.push({processName: ""});
        for(n = 0; n<Config.processes.length;n++){
            if(Config.processes[n].type == "ComplexProcess"){
                Config.complexProcesses.push(Config.processes[i]);
            }
        }
    }

    function restructureProcesses() {

        Config.structuredProcesses = [];
        Config.allocatedProcesses = [];
        var k = 0;

        while (k < Config.processes.length) {
            for (i = 0; i < Config.processes.length; i++) {
                if (Config.processes[i].parentProcess == null) {
                    if (!contains(Config.structuredProcesses, Config.processes[i])) {
                        if(k>=Config.processes.length){
                            break;
                        }
                        Config.structuredProcesses.push(Config.processes[i]);
                        Config.allocatedProcesses.push(Config.processes[i]);
                        k++;
                    }
                } else {
                    process = getParent(Config.processes[i]);
                    if (process != null) {
                        if(process.childProcesses == null){
                            process.childProcesses = [];
                        }
                        if (!contains(process.childProcesses, Config.processes[i])) {
                            if(k>=Config.processes.length){
                                break;
                            }
                            process.childProcesses.push(Config.processes[i]);
                            Config.allocatedProcesses.push(Config.processes[i]);
                            k++;
                        }
                    }
                }
            }
        }
    }

    function contains(processes, process) {
        for (l = 0; i < processes.length; l++) {
            if (processes[l].processId == process.processId) {
                return true;
            }
        }
        return false;
    }

    function getParent(process) {
        for (j = 0; j < Config.allocatedProcesses.length; j++) {
            if (process.parentProcess.processId == Config.allocatedProcesses[j].processId) {
                return Config.allocatedProcesses[j];
            }
        }
        return null;
    }
})
;