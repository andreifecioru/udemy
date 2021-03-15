#include "CheckingAccount.h"

#include <iostream>

namespace section_18_challenge_01 {
    void CheckingAccount::withdraw(double amount) {
        amount += m_fee;
        return Account::withdraw(amount);
    }

    void CheckingAccount::print(std::ostream &os) const {
        os.precision(2);
        os << std::fixed;

        os << "[ Checking account: " << m_name
           << " | balance: " << m_balance
           << " , fee: " << m_fee
           << " ]";
    }
}