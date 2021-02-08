#include "lecture_59.h"

#include <vector>
#include <iostream>
#include <cstdlib>

namespace sec_07_lecture_59 {
    using namespace std;

    void display_vector(vector<int> &data) {
        size_t vector_size { data.size() };

        cout << "Vector size: " << vector_size << endl;
        cout << "Vector data: [";

        if (vector_size > 0) {
            for (size_t i = 0; i < vector_size - 1; i++) {
                cout << data.at(i) << ", ";
            }
            cout << data.at(vector_size - 1);
        }

        cout << "]\n\n";
    }

    void display_matrix(matrix_t &mat) {
        size_t row_count { mat.size() };
        size_t col_count { (row_count > 0) ? mat.at(0).size() : 0 };

        cout << "Matrix size: " << row_count << " x " << col_count << endl;
        cout << "Matrix data:\n";

        for (size_t i = 0; i < row_count; i++) {
            if (col_count > 0) {
                for (size_t j = 0; j < col_count - 1; j ++) {
                    cout << mat.at(i).at(j) << ", ";
                }
                cout << mat.at(i).at(col_count - 1);
            }
            cout << '\n';
        }

        cout << endl;
    }

    int run() {
        vector<int> data_1(10);
        display_vector(data_1);

        vector<int> data_2(10, 5);
        display_vector(data_2);

        vector<int> data_3 {1, 2, 3, 4};
        display_vector(data_3);
        data_3.push_back(5);
        display_vector(data_3);

        // out-of-bounds access -> throws exception
        // cout << data_3.at(5);

        cout << "\n===============================\n\n";
        matrix_t mat_0 {
            {1, 2, 3, 4},
            {5, 6, 7, 8}
        };
        display_matrix(mat_0);

        return EXIT_SUCCESS;
    }
}
