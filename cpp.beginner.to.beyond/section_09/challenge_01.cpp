#include "challenge_01.h"

#include <cstdlib>
#include <iostream>
#include <vector>

namespace section_09_challenge_01 {
    using namespace std;

    static void print_numbers(const vector<int>& numbers) {
        cout << "Numbers are: [ ";
        auto num_count { numbers.size() };

        if (num_count > 0) {
            for (auto i {0}; i < num_count - 1; ++i) {
                cout << numbers.at(i) << ", ";
            }
            cout << numbers.at(num_count - 1);
        }

        cout << " ]" << endl;
    }

    static void add_number(vector<int>& numbers) {
        cout << "\nEnter a number: ";

        int num{};
        cin >> num;

        numbers.push_back(num);
    }

    static void compute_mean(const vector<int>& numbers) {
        if (!numbers.empty()) {
            double mean {0.0};
            double running_sum {0.0};

            for (auto num: numbers) {
                running_sum += num;
            }

            mean = running_sum / numbers.size();
            cout << "The average is: " << mean << endl;
        } else {
            cout << "Number list is empty. Nothing to compute" << endl;
        }
    }

    static void compute_smallest(const vector<int>& numbers) {
        if (!numbers.empty()) {
            auto min { numeric_limits<int>::max() };
            for (auto num: numbers) {
                if (num < min)
                    min = num;
            }

            cout << "The smallest number is: " << min << endl;
        } else {
            cout << "Number list is empty. Nothing to compute" << endl;
        }
    }

    static void compute_largest(const vector<int>& numbers) {
        if (!numbers.empty()) {
            auto max { numeric_limits<int>::min() };
            for (auto num: numbers) {
                if (num > max)
                    max = num;
            }

            cout << "The largest number is: " << max << endl;
        } else {
            cout << "Number list is empty. Nothing to compute" << endl;
        }
    }


    static void showMenu() {
        cout << "\n--------------------------\n"
             << "P - Print numbers\n"
             << "A - Add a number\n"
             << "M - Display mean of the numbers\n"
             << "S - Display the smallest number\n"
             << "L - Display the largest number\n"
             << "Q - Quit\n\n"
             << "Enter your choice: ";
    }

    static char getSelection() {
        showMenu();

        char selection {};
        cin >> selection;

        return static_cast<char>(tolower(selection));
    }

    static void main_loop() {
        bool done {false};
        vector<int> numbers {};

        while (!done) {
            char selection { getSelection() };

            switch (selection) {
                case 'p':
                    print_numbers(numbers);
                    break;
                case 'a':
                    add_number(numbers);
                    break;
                case 'm':
                    compute_mean(numbers);
                    break;
                case 's':
                    compute_smallest(numbers);
                    break;
                case 'l':
                    compute_largest(numbers);
                    break;
                case 'q':
                    cout << "Bye!" << endl;
                    done = true;
                    break;
                default:
                    cout << "Invalid selection. Try again..." << endl;
            }
        }
    }

    int run() {
        main_loop();
        return EXIT_SUCCESS;
    }
}
