'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  db.createTable('donation', {
    donationId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true

    },
    userId: {
      type: 'string',
      length: 40,
      foreignKey: {
        name: userId,
        table: user
      }
    },

    charityId: {
      type: 'string',
      foreignKey: {
        name: 'charityId',
        table: charity,
        
      }
    },
    amount: {
      type: 'num',
      notNull: true
    },
    oneTime: {
      type: 'boolean'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('donation');

};

exports._meta = {
  "version": 1
};
