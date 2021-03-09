#include "TrustAccount.h"

#include <iostream>

namespace section_15_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const TrustAccount& account) {
        os << "[ Trust account: " << account.m_name
           << " | balance: " << account.m_balance
           << " , interest rate: " << account.m_interestRate
           << " , bonus: " << account.m_bonus
           << " , remaining withdrawals: " << account.m_remainingWithdrawals
           << " ]";
        return os;
    }

    bool TrustAccount::deposit(double amount) {
        amount = (amount >= s_BonusThreshold) ? amount + m_bonus : amount;
        return Account::deposit(amount);
    }

    bool TrustAccount::withdraw(double amount) {
        double maxWithdrawAmount = m_balance * s_MaxWithdrawPercent / 100.0;
        if (m_remainingWithdrawals > 0 && (amount < maxWithdrawAmount)) {
            --m_remainingWithdrawals;
            return Account::withdraw(amount);
        }

        return false;
    }
}