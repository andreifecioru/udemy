#include "CheckingAccount.h"

#include <iostream>

namespace section_15_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const CheckingAccount& account) {
        os << "[ Checking account: " << account.m_name
           << " | balance: " << account.m_balance
           << " , fee: " << account.m_fee
           << " ]";
        return os;
    }

    bool CheckingAccount::withdraw(double amount) {
        amount += m_fee;
        return Account::withdraw(amount);
    }
}
