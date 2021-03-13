#pragma once

#include <iostream>

namespace section_16_challenge_01 {
    class Printable {
        friend std::ostream& operator<<(std::ostream& os, const Printable& rhs);

        virtual void print(std::ostream& os) const = 0;
    };
}





