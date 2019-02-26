const {When} = require('cucumber');

When(/a project(?: is created)?/, function () {
  this.project = this.projectService.create();
});

When('a member is added to the project', function () {
  this.projectService.addMember(this.project, 'johan');
});

When('some changes are made', function () {
  this.projectService.addMember(this.project, 'michael');
  this.projectService.addMember(this.project, 'janet');
});
