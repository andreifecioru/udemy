#include "challenge_01.h"
#include "TrustAccount.h"
#include "IllegalBalanceException.h"
#include "InsufficientFundsException.h"

#include <iostream>

namespace section_18_challenge_01 {
    int run() {

        try {
            TrustAccount account = TrustAccount{"Andrei", -1000};
            std::cout << account << std::endl;
        } catch (const IllegalBalanceException &ex) {
            std::cerr << ex.what() << std::endl;
        }

        try {
            SavingsAccount account = SavingsAccount{"Andrei", 1000};
            std::cout << account << std::endl;
            account.withdraw(2000);
            std::cout << account << std::endl;
        } catch (const InsufficientFundsException &ex) {
            std::cerr << ex.what() << std::endl;
        }

        return EXIT_SUCCESS;
    }
}
