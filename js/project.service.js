const projectService = function(historyService) {

  const create = function() {
    historyService.add({type: 'project', action: 'created'});
    return { members: [] };
  };

  const addMember = function(project, member) {
    historyService.add({type: 'member', action: 'added'}); 
    project.members.push(member);
  }

  return {
    create: create,
    addMember: addMember
  };
};

module.exports = {ProjectService: projectService};
