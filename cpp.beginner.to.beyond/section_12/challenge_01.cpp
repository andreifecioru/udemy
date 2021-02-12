#include "challenge_01.h"

#include <iostream>
#include <cstdlib>

namespace section_12_challenge_01 {

    void print(const int * const nums, const size_t size) {
        std::cout << "[ ";
        for (auto i {0}; i < size; ++i) {
            std::cout << nums[i] << ' ';
        }
        std::cout << ']' << std::endl;
    }

    int* apply_all(const int * const nums_1, const size_t size_1,
                   const int * const nums_2, const size_t size_2) {
        int * const result = new int[size_1 * size_2];

        for(auto j{0}; j < size_2; ++j) {
            for(auto i{0}; i < size_1; ++i) {
                result[size_1 * j + i] = nums_1[i] * nums_2[j];
            }
        }

        return result;
    }

    int run() {
        constexpr int size_1 {5};
        int const nums_1[] {1, 2, 3, 4, 5};

        constexpr int size_2 {3};
        int const nums_2[] {10, 20, 30};

        std::cout << "Array 1: ";
        print(nums_1, size_1);

        std::cout << "Array 2: ";
        print(nums_2, size_2);

        constexpr int result_size {size_1 * size_2};
        int * const results = apply_all(nums_1, size_1, nums_2, size_2);

        std::cout << "Result: ";
        print(results, result_size);

        delete [] results;

        return EXIT_SUCCESS;
    }
}