const {setWorldConstructor} = require('cucumber')
const {HistoryService} = require('../js/history.service.js');
const {ProjectService} = require('../js/project.service.js');

function CustomWorld() {
    this.historyService = HistoryService();
    this.projectService = ProjectService(this.historyService);
    this.project = {};
}

setWorldConstructor(CustomWorld)
