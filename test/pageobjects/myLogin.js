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

    //Login then new page assertion
    get shopText(){
        return $("//a[text()='ProtoCommerce Home']")
    }

    async Login(userName1,passWord1){
         await this.userName.setValue(userName1)
         await this.passWord.setValue(passWord1)
         await this.signIn.click()
    }
}
module.exports = new LoginPage()
// module.export = new LoginPage()
// exports = new (LoginPage)