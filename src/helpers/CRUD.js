const axios = require("axios");

//const URL = 'http://localhost:4000/'

const HTTP_URL = 'https://app-live-edu-backend.herokuapp.com/'

class CRUD {
    constructor( url ){
        this.url = url
    }

    get = async () =>{
        try{
            const data = await axios.get( HTTP_URL + this.url )
            const data_clean = await data.data
            return data_clean
        }catch( error ){
            console.error( error )
        }
    }
    
    /**
     * 
     * @param {string} name 
     * @param {string} email 
     * @param {string} phone 
     * @param {string} password 
     */
    post = async ( name, email, phone, password ) =>{
        try{
            const data = await axios.post( HTTP_URL + this.url ,{
                "name": name,
                "email": email,
                "phone": phone,
                "password": password,
                "coins": "0"
            })
            //console.log( data )
        }catch( error ){
            console.error( error )
        }
    }
    
    find = async( id ) =>{
        try{
            const users = await this.get()
            //console.log( users )
            const user = await users.find(element => element.id === id );
            //console.log( user )
            return await user
        }catch( error ){
            console.error( error )
        }
    }
}


const userCRUD = new CRUD( 'user' )
const quizCRUD = new CRUD( 'quiz' )

export { userCRUD, quizCRUD }