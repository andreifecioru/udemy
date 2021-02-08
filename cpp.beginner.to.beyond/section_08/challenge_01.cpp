#include "challenge_01.h"

#include <cstdlib>
#include <iostream>

namespace sec_08_challenge_01 {
    using namespace std;

    using change_t = struct {
        int dollars, quarters, dimes, nickels, pennies;
    };

    static int getCentsAmount() {
        cout << "Enter amount in cents: ";

        int cents {};
        cin >> cents;

        return cents;
    }

    static change_t computeChange(int cents) {
        change_t change{};

        change.dollars = cents / constants::cents_per_dollar;
        cents %= constants::cents_per_dollar;

        change.quarters = cents / constants::cents_per_quarter;
        cents %= constants::cents_per_quarter;

        change.dimes = cents / constants::cents_per_dime;
        cents %= constants::cents_per_dime;

        change.nickels = cents / constants::cents_per_nickel;
        change.pennies = cents % constants::cents_per_nickel;

        return change;
    }

    static void showChange(change_t &change) {
        cout << "\nYou can provide change as follows: \n"
             << "\t- dollars\t: " << change.dollars << '\n'
             << "\t- quarters\t: " << change.quarters << '\n'
             << "\t- dimes \t: " << change.dimes << '\n'
             << "\t- nickels\t: " << change.nickels << '\n'
             << "\t- pennies\t: " << change.pennies << endl;
    }

    int run() {
        int cents { getCentsAmount() };

        change_t change { computeChange(cents) };

        showChange(change);

        return EXIT_SUCCESS;
    }
}
