module.exports = {

    generateRandomEmailAddress : function(){
        let emailAddress = 'AutoFramework_' + Math.random().toString().replace('0','') + '@webdriveruni.com';
        return emailAddress;
    },

    generateRandomString : function() {
        return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);

    }
}