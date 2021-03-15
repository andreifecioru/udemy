#pragma once

#include "Account.h"

#include <iostream>
#include <string>
#include <utility>


namespace section_18_challenge_01 {
    class CheckingAccount
            : public Account {

        static constexpr char s_DefaultName[] { "Generic Checking Account" };
        static constexpr double s_DefaultBalance { 0.0 };
        static constexpr double s_DefaultFee { 1.5 };

    protected:
        double m_fee { s_DefaultFee };

    public:
        explicit CheckingAccount(std::string name = s_DefaultName,
                                 double balance = s_DefaultBalance,
                                 double fee = s_DefaultFee)
                : Account { std::move(name), balance }, m_fee { fee } {}

        ~CheckingAccount() override = default;

        void withdraw(double amount) override;

        void print(std::ostream& os) const override;
    };
}