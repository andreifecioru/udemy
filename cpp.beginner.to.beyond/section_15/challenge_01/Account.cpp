#include "Account.h"

#include <iostream>


namespace section_15_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const Account& account) {
        os << "[ Account: " << account.m_name << " | balance: " << account.m_balance << " ]";
        return os;
    }

    bool Account::deposit(const double amount) {
        if (amount >= 0) {
            m_balance += amount;
            return true;
        }

        return false;
    }

    bool Account::withdraw(const double amount) {
        if (amount >= 0 && m_balance >= amount) {
            m_balance -= amount;
            return true;
        }

        return false;
    }
}
