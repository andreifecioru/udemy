#pragma once

#include <iostream>

namespace section_17_challenge_01 {
    class IntValue {
        int m_value { 0 };

    public:
        IntValue() : IntValue { 0 } {}

        explicit IntValue(int value): m_value { value } {
            std::cout << "Constructor: " << m_value << std::endl;
        }

        ~IntValue() {
            std::cout << "Destructor: " << m_value << std::endl;
        }

        int getValue() const {
            return m_value;
        }
    };
}
