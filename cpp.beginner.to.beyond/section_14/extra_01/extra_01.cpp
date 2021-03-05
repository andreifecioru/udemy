#include "extra_01.h"
#include "Vector2D.h"

#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>


namespace section_14_extra_01 {
    namespace {
        Vector2D makeVector(const int x, const int y) {
            return Vector2D{x, y};
        }


        struct Point {
            int x{}, y{};
        };
    }

    int run() {
        Vector2D v1;
        std::cout << v1 << std::endl;

        Vector2D v2 {v1};
        std::cout << v2 << std::endl;

        Vector2D v3;
        v3 = makeVector(1, 1);
        std::cout << v3 << std::endl;

        std::cout << "==============================\n";

        std::vector<Vector2D> vectors;
        for (auto i{0}; i < 3; ++i) {
            vectors.push_back(makeVector(i, i));
        }

        for (const auto& vector: vectors) {
            std::cout << vector << '\n';
        }

        std::cout << "==============================" << std::endl;

        const Vector2D& sum { std::accumulate(vectors.begin(), vectors.end(), Vector2D{}) };

        std::cout << "Sum is: " << sum << std::endl;

        std::cout << "==============================" << std::endl;

        Vector2D v4 {10, 20};

        v4 += Vector2D { 5, 5};
        std::cout << "In place add: " << v4 << std::endl;

        std::cout << "==============================" << std::endl;

        return EXIT_SUCCESS;
    }
}
