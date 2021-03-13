#pragma once

#include "Printable.h"

#include <string>
#include <iostream>
#include <utility>

namespace section_16_challenge_01 {
    class Account
            : public Printable {

        static constexpr char s_DefaultName[] { "Generic Account" };
        static constexpr double s_DefaultBalance { 0.0 };

    protected:
        std::string m_name;
        double m_balance { 0.0 };

    public:
        explicit Account(std::string name = s_DefaultName,
                         double balance = s_DefaultBalance)
                : m_name{ std::move(name) }, m_balance{ balance } {}

        virtual ~Account() = default;

        virtual bool deposit(double amount);
        virtual bool withdraw(double amount);

        void print(std::ostream& os) const override;
    };
}
