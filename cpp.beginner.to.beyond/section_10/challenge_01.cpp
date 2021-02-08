#include "challenge_01.h"

#include <iostream>
#include <cstdlib>

namespace section_10_challenge_01 {
    using namespace std;

    static string encrypt(const string& in_str) {
        string result {};
        for (auto c: in_str) {
            const auto pos {string {constants::alphabet}.find(c) };
            result += (pos == string::npos) ? '?' : constants::cypher[pos];
        }

        return result;
    }

    static string decrypt(const string& in_str) {
        string result {};
        for (auto c: in_str) {
            const auto pos {string {constants::cypher }.find(c) };
            result += (pos == string::npos) ? '?' : constants::alphabet[pos];
        }

        return result;
    }

    int run() {
        string user_input;

        cout << "Enter secret message: ";
        getline(cin, user_input);

        string encrypted_message { encrypt(user_input) };
        string decrypted_message { decrypt(encrypted_message) };

        cout << "\nEncrypted message: " << encrypted_message
             << "\nDecrypted message: " << decrypted_message << endl;

        return EXIT_SUCCESS;
    }

}
