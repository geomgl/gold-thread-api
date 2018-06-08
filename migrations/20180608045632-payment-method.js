'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('payment-mehtod', {
    payment_id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true

    },
    userId: {
      type: 'string',
      length: 40,

    },
    foreignKey: {
      name: charityId,
      table: charity,
      foreignKey: {
        name: user
      }
    },
    amount: {
      type: 'num',
      notNull: true
    },
    card_number: {
      type: 'number',
      length: 50,
      notNull: true
    },
    oneTime: {
      type: 'boolean'
    }
  }, done);
};


exports.down = function(db) {
  db.dropTable('payment-method');
};

exports._meta = {
  "version": 1
};
