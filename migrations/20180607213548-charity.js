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
  db.createTable('charity', {
    charity_id: {
      type: 'int',
      primaryKey: true
    },
    chairity_name: {
      type: 'string ',
      length: 40
    },
    description: {
      type: 'string',
      notNull: true,

    },
    email: {
      type: 'string',
      length: 50
    },
    img: {
      type: 'string',
      length: 50
    }
  }, done);};

exports.down = function(db) {
  db.dropTable('chairty');
};

exports._meta = {
  "version": 1
};
