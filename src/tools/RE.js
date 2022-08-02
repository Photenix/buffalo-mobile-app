//Regurlar expresion

class RE{
    constructor(){}

    static checkPhone( text ){
        const re = /\d{10,10}/
        return re.test( text ) && text.length === 10
    }

    static checkEmail( text ){
        const re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        return re.test( text )
    }

    static checkPassword( text ){
        const re = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,}$/
        return re.test( text )
    }

    static checkName( text ){
        const re = /[a-z\d\n]{3,20}/
        return re.test( text )
    }
}

/*
*Testing*
console.log(
    RE.checkPhone( "5020321" ),
    RE.checkName( "Juan Pino" ),
    RE.checkPassword( "ElPepe123" ),
    RE.checkEmail( "juanito@gmail.com" ),
)
*/

export default RE