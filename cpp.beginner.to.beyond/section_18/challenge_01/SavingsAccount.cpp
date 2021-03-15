#include "SavingsAccount.h"

#include <iostream>

namespace section_18_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const SavingsAccount& account) {
        return os;
    }

    bool SavingsAccount::deposit(double amount) {
        amount += (amount * m_interestRate / 100.0);
        return Account::deposit(amount);
    }

    void SavingsAccount::print(std::ostream &os) const {
        os.precision(2);
        os << std::fixed;

        os << "[ Savings Account: " << m_name
           << " | balance: " << m_balance
           << " , interest rate: " << m_interestRate
           << " ]";
    }
}
