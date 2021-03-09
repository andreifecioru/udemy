#pragma once

#include <string>
#include <iostream>
#include <utility>

namespace section_15_challenge_01 {
    class Account {

        friend std::ostream& operator<< (std::ostream& os, const Account& account);

        static constexpr char s_DefaultName[] {"Generic Account" };
        static constexpr double s_DefaultBalance { 0.0 };

    protected:

        std::string m_name;
        double m_balance{0.0};

    public:
        explicit Account(std::string name = s_DefaultName,
                         double balance = s_DefaultBalance)
                : m_name{ std::move(name) }, m_balance{ balance } {}

        virtual ~Account() = default;

        virtual bool deposit(double amount);
        virtual bool withdraw(double amount);
    };
}


