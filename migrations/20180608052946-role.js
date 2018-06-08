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
  db.createTable('role', {
    role_id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true

    },
    role_name: {
      type: 'string',
      length: 40,
      notNull: true
    },

    user_id: {
      type: 'string',
      foreignKey: {
        name: 'user_id',
        table: user,
      }
    },

    description: {
      type: 'string',
      length: 40,
      notNull: true

    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('role');
};

exports._meta = {
  "version": 1
};
