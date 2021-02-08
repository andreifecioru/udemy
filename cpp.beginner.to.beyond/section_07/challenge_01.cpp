#include "challenge_01.h"
#include "lecture_59.h"

#include <iostream>
#include <cstdlib>
#include <vector>

namespace sec_07_challenge_01 {
    using namespace std;
    using namespace sec_07_lecture_59;

    int run() {
        vector<int> vec_1{};
        vec_1.push_back(10);
        vec_1.push_back(20);
        display_vector(vec_1);


        vector<int> vec_2{};
        vec_2.push_back(100);
        vec_2.push_back(200);
        display_vector(vec_2);

        matrix_t mat{};
        mat.push_back(vec_1); // data-copy is performed here
        mat.push_back(vec_2);

        cout << "Changing vec. 1\n";
        vec_1.at(0) = 1000;
        display_vector(vec_1);
        display_matrix(mat);  // matrix data unchanged (data was copied)

        return EXIT_SUCCESS;
    }
}
