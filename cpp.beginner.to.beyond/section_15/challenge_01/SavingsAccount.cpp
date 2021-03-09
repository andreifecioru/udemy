#include "SavingsAccount.h"

#include <iostream>

namespace section_15_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const SavingsAccount& account) {
        os << "[ Savings Account: " << account.m_name
           << " | balance: " << account.m_balance
           << " , interest rate: " << account.m_interestRate
           << " ]";
        return os;
    }

    bool SavingsAccount::deposit(double amount) {
        amount += (amount * m_interestRate / 100.0);
        return Account::deposit(amount);
    }
}
