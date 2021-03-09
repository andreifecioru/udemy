#define ON 1
#define OFF 0


#define SEC_06_EX_01            OFF
#define SEC_06_LECTURE_50       OFF
#define SEC_07_LECTURE_55       OFF
#define SEC_07_LECTURE_59       OFF
#define SEC_07_CHALLENGE_01     OFF
#define SEC_08_CHALLENGE_01     OFF
#define SEC_09_EX_01            OFF
#define SEC_09_CHALLENGE_01     OFF
#define SEC_10_EX_01            OFF
#define SEC_10_EX_02            OFF
#define SEC_10_CHALLENGE_01     OFF
#define SEC_10_ASSIGN_01        OFF
#define SEC_11_LECTURE_102      OFF
#define SEC_12_LECTURE_123      OFF
#define SEC_12_CHALLENGE_01     OFF
#define SEC_13_CHALLENGE_01     OFF
#define SEC_14_EXTRA_01         OFF
#define SEC_14_CHALLENGE_01     OFF
#define SEC_15_CHALLENGE_01     ON

#include "lectures.h"

#include <iostream>

namespace {
    void cleanup() {
        std::cout << "Done." << std::endl;
    }
}

int main() {
    std::atexit(cleanup);

    return run();
}
