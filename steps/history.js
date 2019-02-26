const {Then} = require('cucumber');
const {expect} = require('chai');

Then('the history contains one event', function () {
  expect(this.historyService.getAll()).to.have.lengthOf(1);
});

Then('the history contains {int} events', function (events) {
  expect(this.historyService.getAll()).to.lengthOf(events);
});

Then('the history says project was created', function () {
  expect(this.historyService.getAll()[0].type).to.equal('project');
});

Then('the history says member was added', function () {
  expect(this.historyService.getAll()[0].type).to.equal('member');
  expect(this.historyService.getAll()[0].action).to.equal('added');
});

Then('events are sorted by timestamp, starting with the most recent one', function () {
  const events = this.historyService.getAll();
  let prev;
  events.forEach(ev => {
    if (prev) {
      expect(prev.timestamp).to.be.above(ev.timestamp);
    } else {
      prev = ev;
    }
  });
});
