var Achievements = {
  list: [
    {
      title: 'Halfway Novice',
      description: 'Get at least half of the questions correct in a single round'
    },
    {
      title: 'So close!',
      description: 'Get all but one question correct in a single round'
    },
    {
      title: 'Halfway Journeyman',
      description: 'Get at least half of the questions correct in five rounds'
    },
    {
      title: 'Halfway Expert',
      description: 'Get at least half of the questions correct in 20 rounds'
    },
    {
      title: 'Halfway Elite',
      description: 'Get at least half of the questions correct in 50 rounds'
    },
    {
      title: 'Halfway Master',
      description: 'Get at least half of the questions correct in 100 rounds'
    },
    {
      title: '100% Novice',
      description: 'Get all questions correct in a single round'
    },
    {
      title: '100% Journeyman',
      description: 'Get all questions correct in a 5 rounds'
    },
    {
      title: '100% Expert',
      description: 'Get all questions correct in a 20 rounds'
    },
    {
      title: '100% Elite',
      description: 'Get all questions correct in a 50 rounds'
    },
    {
      title: '100% Master',
      description: 'Get all questions correct in a 100 rounds'
    },
  ],
  getDescription: function(idx) {
    if(idx >= this.list.length) {
      return 'INVALID';
    }

    return this.list[idx].description;
  },
  getTitle: function(idx) {
    if(idx >= this.list.length) {
      return 'INVALID';
    }

    return this.list[idx].title;
  }
};

module.exports = Achievements;
