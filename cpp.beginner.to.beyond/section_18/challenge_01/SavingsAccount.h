#pragma once

#include "Account.h"

#include <iostream>
#include <string>
#include <utility>


namespace section_18_challenge_01 {
    class SavingsAccount
            : public Account {

        static constexpr char s_DefaultName[] { "Generic Savings Account" };
        static constexpr double s_DefaultBalance { 0.0 };
        static constexpr int s_DefaultInterestRate { 0 };

    protected:
        int m_interestRate{ s_DefaultInterestRate };

    public:
        explicit SavingsAccount(std::string name = s_DefaultName,
                                double balance = s_DefaultBalance,
                                int interestRate = s_DefaultInterestRate)
                : Account{ std::move(name), balance }, m_interestRate{ interestRate } {}

        ~SavingsAccount() override = default;

        bool deposit(double amount) override;

        void print(std::ostream& os) const override;
    };
}

