const mongoose = require('mongoose')
const personSchema = mongoose.Schema()
const person = {

    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique: true,
    },
    contact:{
        type: Object,
        require: true,
        cellphone:{
            type:String,
            require: true,
        },
        address:{
            type: Object,
            require: true,
        },
        city:{
            type:String,
            require:true,
        },   
        code_zip:{
            type:Number,
            unique: true,
        },
        Geolocation:{
            type:Array,
            unique: true,
        }
        
    },
    profesion:{
        type:Object,
        require: true,
        name:{
            type:String,
            require:true,
        },
        organizacion:{
            type:String,
            require:true,
        },
        position_job:{
            type:String,
            require:true,
        }
    }
    
};

module.exports = mongoose.model('UserCollection', personSchema)