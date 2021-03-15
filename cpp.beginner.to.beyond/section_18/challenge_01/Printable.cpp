#include "Printable.h"

#include <iostream>

namespace section_18_challenge_01 {
    std::ostream& operator<<(std::ostream& os, const Printable& rhs) {
        rhs.print(os);
        return os;
    }
}
