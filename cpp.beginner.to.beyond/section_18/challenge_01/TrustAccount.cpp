#include "TrustAccount.h"

#include <iostream>

namespace section_18_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const TrustAccount& account) {
        return os;
    }

    bool TrustAccount::deposit(double amount) {
        amount = (amount >= s_BonusThreshold) ? amount + m_bonus : amount;
        return SavingsAccount::deposit(amount);
    }

    void TrustAccount::withdraw(double amount) {
        double maxWithdrawAmount = m_balance * s_MaxWithdrawPercent / 100.0;
        if (m_remainingWithdrawals > 0 && (amount < maxWithdrawAmount)) {
            --m_remainingWithdrawals;
            return SavingsAccount::withdraw(amount);
        }
    }

    void TrustAccount::print(std::ostream &os) const {
        os.precision(2);
        os << std::fixed;

        os << "[ Trust account: " << m_name
           << " | balance: " << m_balance
           << " , interest rate: " << m_interestRate
           << " , bonus: " << m_bonus
           << " , remaining withdrawals: " << m_remainingWithdrawals
           << " ]";
    }
}
