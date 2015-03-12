var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  age: Number,
  password: String,
  job: String,
  hobby: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt:{
      type: Date,
      default: Date.now()
    }
  }
});

UserSchema.pre('save', function(next){
  var user = this;
  if (this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now();
  }else{
    this.meta.updateAt = Date.now();
  } 
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if (err) {
      return next(err);
    }else{
      bcrypt.hash(user.password, salt, function(err, hash){
        if (err) {
          return next(err);
          user.password = hash;
          next();
        }
      });
    }
  });
  next();
})

UserSchema.statics = {
  fetch: function(cb){
    return this
      .find({})
      .sort({'name': 'asc'})
      .exec(cb);
  },
  findById: function(id, cb){
    return this
      .findOne({_id: id}).exec(cb);
  },
  createInfo: function(user, cb){
    return this
      .create(user, cb);
  },
  updateInfo: function(id, user, cb){
    var conditions = {_id: id};
    var options = {};
    var update = {$set: user};
    return this
      .update(conditions, update, options, cb);
  },
  deleteInfo: function(id, cb){
    var conditions = {_id: id};
    return this
      .remove(conditions, cb);
  }
};
var User = mongoose.model('users', UserSchema);

module.exports = User