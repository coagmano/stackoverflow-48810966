import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'articleList'() {
    return [
      {
        name: 'test1',
        sellPrice: [
          {
            money: {
              currencyCode: 'EUR',
            },
          },
        ],
      },
      {
        name: 'test2',
        sellPrice: [
          {
            money: {
              currencyCode: 'AUD',
            },
          },
        ],
      },
      {
        name: 'test3',
        sellPrice: [
          {
            money: {
              currencyCode: 'USD',
            },
          },
        ],
      },
    ];
  },
});
