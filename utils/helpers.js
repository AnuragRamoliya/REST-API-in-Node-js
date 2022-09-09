/* 
 * Generate Random Token
 */
function generateCustomToken() {
    let randomString = require("randomstring"),
        Encrypt = require('./../Configs/encrypt'),
        encrypt = new Encrypt();

    let tokenString = randomString.generate({
        length: 25,
        charset: 'alphanumeric'
    });

    return encrypt.encryptEntity(tokenString);
}