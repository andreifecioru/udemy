#include "lecture_55.h"

#include <iostream>
#include <cstdlib>


namespace sec_07_lecture_55 {
    using namespace std;

    static void display_array(const int values[], const size_t length) {
        cout << "Array size is: " << length << endl;
        cout << "Array values: [";

        if (length > 0) {
            for (size_t i = 0; i < length - 1; i++) {
                cout << values[i] << ", ";
            }
            cout << values[length - 1];
        }
        cout << "]\n\n";
    }

    int run() {
        int values_0[5]; // un-initialized array
        display_array(values_0, sizeof(values_0) / sizeof(int));

        int values_1[] {1, 2, 3, 4, 5, 6, 7};
        display_array(values_1, sizeof(values_1) / sizeof(int));

        int values_2[5] {};
        display_array(values_2, sizeof(values_2) / sizeof(int));

        int values_3[5] {1, 2, 3};
        display_array(values_3, sizeof(values_3) / sizeof(int));

        cout << "Enter a value: ";
        // attempt to write outside the array (this may or may not crash the program)
        cin >> values_3[5];
        cout << "You entered: " << values_3[5] << endl;

        return EXIT_SUCCESS;
    }
}
