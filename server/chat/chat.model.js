const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const chatSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  type: Number,
  message: String,
  date_created: Date,
  date_modified: Date,
});



chatSchema.plugin(mongoosePaginate);
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;

