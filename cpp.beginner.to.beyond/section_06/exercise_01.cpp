#include "exercise_01.h"


#include <climits>
#include <cfloat>
#include <iostream>


namespace sec_06_ex_01 {
    using namespace std;

    static void employee_profile() {
        double hourly_wage{23.50};

        cout << "Enter the age and name (separated by space): ";
        int age{};
        string name{};
        cin >> age >> name;

        cout << name << ' ' << age << ' ' << hourly_wage;
    }

    static void show_sizes() {
        cout << "Size of int: " << sizeof(int) << endl;
        cout << "Size of long: " << sizeof(long) << endl;
        cout << "Size of long long: " << sizeof(long long) << endl;
        cout << "Size of float: " << sizeof(float) << endl;
        cout << "Size of double: " << sizeof(double) << endl;
        cout << "Size of long double: " << sizeof(long double) << endl;
    }

    static void show_limits_1() {
        cout << "--------------------------\n";

        cout << "Max int is: " << INT_MAX << endl;
        cout << "Max long is: " << LONG_MAX << endl;
        cout << "Max long long is: " << LONG_LONG_MAX << endl;
        cout << "Max float is: " << FLT_MAX << endl;
        cout << "Max double is: " << DBL_MAX << endl;
        cout << "Max long double is: " << LDBL_MAX << endl;
    };

    static void show_limits_2() {
        cout << "--------------------------\n";

        cout << "Max int is: " << numeric_limits<int>::max() << endl;
        cout << "Max long is: " << numeric_limits<long>::max() << endl;
        cout << "Max long long is: " << numeric_limits<long long>::max() << endl;
        cout << "Max float is: " << numeric_limits<float>::max() << endl;
        cout << "Max double is: " << numeric_limits<double>::max() << endl;
        cout << "Max long double is: " << numeric_limits<long double>::max() << endl;
    };

    int run() {
//        employee_profile();
        show_sizes();
        show_limits_1();
        show_limits_2();
        return 0;
    }
}
