#pragma once

#include <exception>

namespace section_18_challenge_01 {
    class InsufficientFundsException
        : public std::exception {

    public:
        InsufficientFundsException() noexcept = default;
        ~InsufficientFundsException() override = default;

        [[nodiscard]] const char* what() const noexcept override {
            return "Account balance is insufficient to apply withdrawal";
        }

    };
}