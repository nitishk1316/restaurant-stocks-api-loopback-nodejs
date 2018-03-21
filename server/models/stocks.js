'use strict';

module.exports = function(Stock) {

  Stock.getAll = function (cb) {
    Stock.find({}, function (err, res) {
      if (err) cb(null, err);
        else  cb(null, res);
    });
  };

  Stock.getById = function (id, cb) {
    Stock.findOne({ id: id }, function (err, res) {
      if (err) cb(null, err);
      else  cb(null, res);
    });
  };

  Stock.createStock = function (data, cb) {
    Stock.create(data, function (err, res) {
      if (err) cb(null, err);
      else  cb(null, res);
    });
  };

  Stock.updateStock = function (id, data, cb) {
    Stock.update({ id: id }, data, function (err, res) {
      if (err) cb(null, err);
      else  cb(null, res);
    });
  };

  Stock.deleteById = function (id, cb) {
    Stock.deleteById(id, function (err, res) {
      if (err) cb(null, err);
      else  cb(null, res);
    });
  };

  Stock.remoteMethod('getAll', {
    description: 'Get all stocks list',
    http: { path: '/', verb: 'get' },
    returns: { root: true, type: 'Array' }
  });

  Stock.remoteMethod('getById', {
    description: 'Get stock by id',
    accepts: {arg: 'id', type: 'number', required: true},
    http: { path: '/:id', verb: 'get' },
    returns: { root: true, type: 'Object' }
  });

  Stock.remoteMethod('createStock', {
    description: 'Create stock',
    accepts: {arg: 'data', type: 'Object', required: true, http: { source: 'body' } },
    http: { path: '/', verb: 'post' },
    returns: { root: true, type: 'Object' }
  });

  Stock.remoteMethod('updateStock', {
    description: 'Update stock by id',
    accepts: [
      { arg: 'id', type: 'number', required: true },
      { arg: 'data',  type: 'object', required: true, http: { source: 'body' } }
    ],
    http: { path: '/:id', verb: 'put' },
    returns: { root: true, type: 'Object' }
  });

  Stock.remoteMethod('deleteById', {
    description: 'Delete stock by id',
    accepts: {arg: 'id', type: 'number', required: true},
    http: { path: '/:id', verb: 'delete' },
    returns: { root: true, type: 'Object' }
  });
};
