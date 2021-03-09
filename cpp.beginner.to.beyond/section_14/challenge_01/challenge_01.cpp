#include "challenge_01.h"
#include "MyString.h"

#include <iostream>

namespace section_14_challenge_01 {
    namespace {

        MyString echo(const MyString& in) {
            return in;
        }

    }

    int run() {
        MyString str1{"Hello!"};
        std::cout << "str1: " << str1 << std::endl;

        MyString str2 {str1};
        std::cout << "str2: " << str2 << std::endl;

        MyString str3 { std::move(echo(str2)) };
        std::cout << "str3: " << str3 << std::endl;

        std::cout << std::boolalpha;
        std::cout << "str1 == str2 : " << (str1 == str2) << std::endl;
        std::cout << "str1 != str2 : " << (str1 != str2) << std::endl;

        std::cout << "-str1: " << -str1 << std::endl;

        std::cout << "\n\n======================\n\n";

        MyString str4{"aaa"};
        MyString str5{"bbb"};
        std::cout << "str4 < str5 : " << (str4 < str5) << std::endl;
        std::cout << "str4 > str5 : " << (str4 > str5) << std::endl;

        MyString str6 { str4 + str5 };
        std::cout << "str6: " << str6 << std::endl;

        str6 += str4;
        std::cout << "str6: " << str6 << std::endl;

        MyString str7 {"123"};
        std::cout << "str7 * 4 : " << str7 * 4 << std::endl;

        str7 *= 2;
        std::cout << "str7 * 4 : " << str7 << std::endl;

        MyString str8 {"andrei"};
        std::cout << "++str8: " << ++str8 << std::endl;

        std::cout << "\n\n======================\n\n";
        MyString str9 { 4 };

        std::cout << "Enter a value for str9: ";
        std::cin >> str9;

        std::cout << "str9: " << str9 << std::endl;

        return EXIT_SUCCESS;
    }
}