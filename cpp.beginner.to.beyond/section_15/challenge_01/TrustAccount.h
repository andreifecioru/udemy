#pragma once

#include "SavingsAccount.h"

#include <iostream>
#include <string>
#include <utility>

namespace section_15_challenge_01 {
    class TrustAccount
            : public SavingsAccount {

        friend std::ostream& operator<<(std::ostream& os, const TrustAccount& account);

        static constexpr char s_DefaultName[] { "Generic Trust Account" };
        static constexpr double s_DefaultBalance { 0.0 };
        static constexpr int s_DefaultInterestRate { 0 };
        static constexpr double s_BonusThreshold { 5000.0 };
        static constexpr double s_DefaultBonus { 50.0 };
        static constexpr int s_MaxWithdrawals { 3 };
        static constexpr int s_MaxWithdrawPercent { 20 };

    protected:
        double m_bonus { s_DefaultBonus };
        int m_remainingWithdrawals { s_MaxWithdrawals };

    public:
        explicit TrustAccount(std::string name = s_DefaultName,
                              double balance = s_DefaultBalance,
                              int interestRate = s_DefaultInterestRate,
                              double bonus = s_DefaultBonus)
                : SavingsAccount { std::move(name), balance, interestRate }, m_bonus { bonus } {}

        ~TrustAccount() override = default;
        
        bool deposit(double amount) override;
        bool withdraw(double amount) override;
    };
}
