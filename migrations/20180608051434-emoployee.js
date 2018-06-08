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
  db.createTable('employee', {
    empoloyee_id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true

    },
    charity_id: {
      type: 'string',
      length: 40,
      foreignKey: {
        name: 'charity_id',
        table: charity
      }
    },

    role_id: {
      type: 'string',
      foreignKey: {
        name: 'charityId',
        table: charity, 
      }
    }
  }, done);
};

exports.down = function(db) {
  db.dropTable('employee');
};

exports._meta = {
  "version": 1
};
