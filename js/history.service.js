const historyService = function() {

  const events = [];
  let timestamp = 0;

  const getAll = function() {
    return events;
  };

  const add = function(ev) {
    events.unshift(Object.assign(ev, {timestamp: timestamp++}));
  }

  return {
    getAll: getAll,
    add: add
  };
};

module.exports = {HistoryService: historyService};
