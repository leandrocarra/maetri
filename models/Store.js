const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: 'Entre com um nome valido'
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
  photo: String,
  date: String,
});

storeSchema.pre('save', function(next){
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Store', storeSchema);