#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var stat = fs.stat;

var config = {};

config.name = process.argv.pop() || 'wechat-mp-example';

function copyDirectory(src,dst) {
  fs.readdir(src, function(err, paths) {
    console.log(paths);
    if(err){
      throw err;
    }
    paths.forEach(function(path) {
      var _src = src + '/' + path;
      var _dst = dst + '/' + path;
      var readable;
      var writable;
      stat(_src,function(err, st) {
        if (err) {
          throw err;
        }

        if(st.isFile()){
          readable = fs.createReadStream(_src);
          writable = fs.createWriteStream(_dst);
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copyDirectory);
        }
      });
    });
  });
}

function exists(src, dst, callback) {
  fs.exists(dst, function(exists) {
    if(exists) {
      callback(src, dst);
    } else {
      fs.mkdir(dst, function(){
        callback(src, dst);
      })
    }
  })
}

var from = path.join(__dirname, 'template');
var to = path.join('./', config.name);

exists(from, to, copyDirectory);
