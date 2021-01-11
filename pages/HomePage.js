import { Selector, t } from 'testcafe'

class HomePage{
    constructor(){
        this.loginButtonStart = Selector('a._2q_cf[href="/users/showlogin"]')
    }
 
    async clickOnLoginButton(){
        await t
        .click(this.loginButtonStart);
    }

}

export default new HomePage();