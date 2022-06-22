const mongoose = require('mongoose')


const conn = async()=>{
    //mongoAtlas
    var atlas = await mongoose.connect('mongodb+srv://UserName:120904@fiaptecnico.gh4fi.mongodb.net/todo_list')
}

module.exports = conn