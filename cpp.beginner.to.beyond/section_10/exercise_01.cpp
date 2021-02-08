#include "exercise_01.h"

#include <iostream>
#include <cstdlib>

namespace section_10_ex_01 {
    using namespace std;

    void cpp_strings() {

        string unformatted_full_name {"StephenHawking"};

        //----DO NOT MODIFY THE CODE ABOVE THIS LINE----
        //----WRITE YOUR CODE BELOW THIS LINE----
        string first_name { unformatted_full_name, 0, 7};
//        cout << "First name: " << first_name << endl;

        string last_name = unformatted_full_name.substr(first_name.length());
//        cout << "Last name: " << last_name << endl;

        string formatted_full_name = first_name + last_name;
        formatted_full_name.insert(first_name.length(), " ");



        //----WRITE YOUR CODE ABOVE THIS LINE----
        //----DO NOT MODIFY THE CODE BELOW THIS LINE----

        cout << formatted_full_name;
    }

    int run() {

        cpp_strings();

        return EXIT_SUCCESS;
    }

}
