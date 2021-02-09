#include "lecture_102.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

namespace section_11_lecture_102 {

using namespace std;

int run() {
    cout << "RAND_MAX value is: " << RAND_MAX << endl;

    // initialize the RNG
    srand(time(nullptr));

    constexpr auto num_count{10};
    constexpr auto max_val{6};
    constexpr auto min_val{1};

    for (auto i{1}; i <= num_count; ++i) {
        auto num{rand() % max_val + min_val};

        cout << "Random number " << i << " is: " << num << endl;
    }

    return EXIT_SUCCESS;
}

}  // namespace section_11_lecture_102
