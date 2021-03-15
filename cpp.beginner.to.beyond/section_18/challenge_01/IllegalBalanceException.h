#pragma once

#include <exception>

namespace section_18_challenge_01 {
    class IllegalBalanceException
        : public std::exception {

    public:
        IllegalBalanceException() noexcept = default;
        ~IllegalBalanceException() override = default;

        [[nodiscard]] const char* what() const noexcept override {
            return "Account balance cannot be negative";
        }
    };
}



