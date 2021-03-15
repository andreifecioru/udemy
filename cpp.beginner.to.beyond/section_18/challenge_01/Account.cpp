#include "Account.h"
#include "InsufficientFundsException.h"

#include <iostream>


namespace section_18_challenge_01 {
    bool Account::deposit(const double amount) {
        if (amount >= 0) {
            m_balance += amount;
            return true;
        }

        return false;
    }

    void Account::withdraw(const double amount) {
        if (amount >= 0 && m_balance >= amount) {
            m_balance -= amount;
        } else {
            throw InsufficientFundsException { };
        }
    }

    void Account::print(std::ostream &os) const {
        os.precision(2);
        os << std::fixed;

        os << "[ Account: " << m_name << " | balance: " << m_balance << " ]";
    }
}

