#include "exercise_01.h"

#include <iostream>
#include <vector>
#include <cstdlib>
#include <sstream>

namespace section_09_ex_01 {
    using namespace std;

    template <class T> void showVector(const vector<T>& items) {
        cout << "Vector [ ";

        const auto item_count {items.size()};

        if (item_count > 0) {
            for (auto i{0}; i < item_count - 1; ++i) {
                cout << items.at(i) << ", ";
            }
            cout << items.at(item_count - 1);
        }

        cout << " ]" << endl;
    }

    static void getNumbers(vector<int>& numbers) {
        cout << "Enter numbers separated by space: ";

        string user_input {};
        getline(cin, user_input);

        stringstream ss(user_input);
        string token {};
        while (ss >> token) {
            try {
                numbers.push_back(stoi(token));
            } catch (invalid_argument& e) {
                cout << "Invalid input: " << token << endl;
            }
        }
    }

    static int compute(const vector<int>& numbers) {
        auto num_count { numbers.size() };
        auto result {0};

        if (num_count > 1) {
            for (auto i {0}; i < num_count - 1; ++i) {
                for (auto j {i + 1}; j < num_count; j ++) {
                    cout << '(' << numbers.at(i) << ',' << numbers.at(j) << ") ";
                    result += numbers.at(i) * numbers.at(j);
                }
            }
            cout << endl;
        }

        return result;
    }

    int run() {
        vector<int> numbers {};
        getNumbers(numbers);
        showVector(numbers);

        cout << "Result is: "<< compute(numbers) << endl;

        return EXIT_SUCCESS;
    }
}
