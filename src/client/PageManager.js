var Constants = require('./Constants');
var PageManager = {
  page : Constants.PAGES.HOME,
  subscribers : [],
  getCurrentPage : function() {
    return this.page;
  },
  subscribe : function(cb) {
    subscribers.push(cb);
  },
  notifySubscribers : function() {
    for(var i=0;i<subscribers.length;i++) {
      cb(getCurrentPage());
    }
  },
  changePage : function(new_page) {
    page = new_page;
    notifySubscribers();
  }
};

module.exports = PageManager;
