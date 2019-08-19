import mongoose from 'mongoose';

let Task = new mongoose.Schema({
    title: String,
    done: Boolean
});

export default mongoose.model('Task', Task);