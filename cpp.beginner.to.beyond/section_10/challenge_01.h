#ifndef CPP_BEGINNER_TO_BEYOND_CHALLENGE_01_H
#define CPP_BEGINNER_TO_BEYOND_CHALLENGE_01_H

#include <string>

namespace section_10_challenge_01 {
    using namespace std;

    namespace constants {
        inline constexpr char alphabet[] {"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQERSTUVWXYZ "};
        inline constexpr char cypher[]   {"bcdefghijklmnopqrstuvwxyzaBCDEFGHIJKLMNOPQERSTUVWXYZA-"};
    }

    int run();
}

#endif //CPP_BEGINNER_TO_BEYOND_CHALLENGE_01_H
