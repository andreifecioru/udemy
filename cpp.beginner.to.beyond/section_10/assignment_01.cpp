#include "assignment_01.h"

#include <cstdlib>
#include <iostream>
#include <algorithm>
#include <vector>


namespace section_10_assign_01 {
    using namespace std;

    static void show_pyramid(const string& in_str) {
        string work_str { in_str };
        vector<string> pyramid {};
        auto iter_count {0};

        while (!work_str.empty()) {
            string reversed { work_str };
            reversed.erase(reversed.end() - 1);
            reverse(reversed.begin(), reversed.end());

            string padding (iter_count, ' ');

            string result { padding };
            result.append(work_str).append(reversed).append(padding);
            pyramid.push_back(result);

            work_str.erase(work_str.end() - 1);
            ++iter_count;
        }

        reverse(pyramid.begin(), pyramid.end());
        for (const auto& lvl: pyramid) {
            cout << lvl << endl;
        }
    }

    int run () {
        cout << "Enter your string: ";
        string user_input;
        getline(cin, user_input);

        show_pyramid(user_input);

        return EXIT_SUCCESS;
    }
}
