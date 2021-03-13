#include "Printable.h"

#include <iostream>

namespace section_16_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const Printable& rhs) {
        rhs.print(os);
        return os;
    }
}
