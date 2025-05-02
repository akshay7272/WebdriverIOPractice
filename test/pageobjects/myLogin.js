class LoginPage {
    get userName() {
        return $('#username')
    }
    get passWord() {
        return $('#password')
    }
    get signIn() {
        return $('#signInBtn')
    }

    async Login(userName,passWord){
         await this.userName.setValue(userName)
         await this.passWord.setValue(passWord)
         await this.signIn.click()
    }
}

modules.exports = new LoginPage()