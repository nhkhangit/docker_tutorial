const Account = require('./account');



class AccountService{
    static async checkCredentials(username, password) {
        const account = await Account.findOne({ where: { username, password } });
        if(account)
        {
            return true;
        }
        return false;
      }
}

module.exports = AccountService;
