import { expect as chaiExpect } from "chai";
class ConfirmPage{
    get SucessMsgElement() {
        return $('.alert-success strong')
    }

    async ConfirmText() {
      const assertSuccess = await this.SucessMsgElement
          const dataSucess = await assertSuccess.getText()
          chaiExpect(dataSucess).to.deep.equal('Success!')
    }
}

module.exports = new ConfirmPage()