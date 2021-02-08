#include "exercise_02.h"

#include <iostream>
#include <cstdlib>

namespace section_10_ex_02 {
    using namespace std;

    static void remove_first_name(string& full_name) {
        const auto space_pos = full_name.find(" ");
        if (space_pos != string::npos) {
            full_name.erase(0, space_pos + 1);
        }
    }

    void cpp_strings() {

        string journal_entry_1 {"Isaac Newton"};
        string journal_entry_2 {"Leibniz"};

        //----DO NOT MODIFY THE CODE ABOVE THIS LINE----
        //----WRITE YOUR CODE BELOW THIS LINE----
        remove_first_name(journal_entry_1);
//        cout << "Entry 1: " << journal_entry_1 << endl;

        remove_first_name(journal_entry_2);
//        cout << "Entry 2: " << journal_entry_2 << endl;

        if (journal_entry_1 > journal_entry_2) {
            journal_entry_1.swap(journal_entry_2);
        }

        //----WRITE YOUR CODE ABOVE THIS LINE----
        //----DO NOT MODIFY THE CODE BELOW THIS LINE----

        cout << journal_entry_1 << "\n" << journal_entry_2;
    }

    int run() {

        cpp_strings();

        return EXIT_SUCCESS;
    }

}
