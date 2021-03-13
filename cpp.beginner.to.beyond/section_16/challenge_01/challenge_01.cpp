#include "challenge_01.h"

#include "Account.h"
#include "SavingsAccount.h"
#include "CheckingAccount.h"
#include "TrustAccount.h"

#include <iostream>
#include <vector>
#include <algorithm>


namespace section_16_challenge_01 {
    namespace {

        void createAccounts(
            std::vector<Account*>& accounts,
            std::vector<Account*>& savingAccounts,
            std::vector<Account*>& checkingAccounts,
            std::vector<Account*>& trustAccounts) {

            accounts.emplace_back(new Account);
            accounts.emplace_back(new Account { "Jim" });
            accounts.emplace_back(new Account { "Jane", 1000 });
            accounts.emplace_back(new Account { "George", 500 });

            savingAccounts.emplace_back(new SavingsAccount);
            savingAccounts.emplace_back(new SavingsAccount { "Roland" });
            savingAccounts.emplace_back(new SavingsAccount { "Kate", 2000, 2 });
            savingAccounts.emplace_back(new SavingsAccount { "Mike", 700, 5 });

            checkingAccounts.emplace_back(new CheckingAccount);
            checkingAccounts.emplace_back(new CheckingAccount { "Helen" });
            checkingAccounts.emplace_back(new CheckingAccount { "Anna", 2000 });
            checkingAccounts.emplace_back(new CheckingAccount { "Kevin", 700, 5.0 });

            trustAccounts.emplace_back(new TrustAccount);
            trustAccounts.emplace_back(new TrustAccount { "Tim" });
            trustAccounts.emplace_back(new TrustAccount { "Jack", 2000, 2 });
            trustAccounts.emplace_back(new TrustAccount { "Jow", 700, 5 });
        }

        void destroyAccounts(std::vector<Account*>& accounts) {
            std::for_each(accounts.begin(), accounts.end(), [](auto account) { delete account; });
        }
        void destroyAllAccounts(
                std::vector<Account*>& accounts,
                std::vector<Account*>& savingAccounts,
                std::vector<Account*>& checkingAccounts,
                std::vector<Account*>& trustAccounts) {

            destroyAccounts(accounts);
            destroyAccounts(savingAccounts);
            destroyAccounts(checkingAccounts);
            destroyAccounts(trustAccounts);

        }
        void display(const std::vector<Account*>& accounts) {
            std::cout << "\n================[ Accounts ]======================\n";
            if (accounts.empty()) {
                std::cout << "No accounts available";
            } else {
                std::for_each(accounts.begin(), accounts.end(), [](auto account) {
                    std::cout << *account << '\n';
                });
            }

            std::cout << std::endl;
        }

        void deposit(std::vector<Account*>& accounts, const double amount) {
            std::for_each(accounts.begin(), accounts.end(), [amount](auto account) {
                if (!account->deposit(amount))
                    std::cout << "Failed to deposit " << amount << " to: " << *account << std::endl;
            });
        }

        void withdraw(std::vector<Account*>& accounts, const double amount) {
            std::for_each(accounts.begin(), accounts.end(), [amount](auto account) {
                if (!account->withdraw(amount))
                    std::cout << "Failed to withdraw " << amount << " from: " << *account << std::endl;
            });
        }
    }

    int run() {
        std::vector<Account*> accounts;
        std::vector<Account*> savingAccounts;
        std::vector<Account*> checkingAccounts;
        std::vector<Account*> trustAccounts;

        createAccounts(accounts, savingAccounts, checkingAccounts, trustAccounts);

        display(accounts);
        display(savingAccounts);
        display(checkingAccounts);

        deposit(accounts, -10.0);
        deposit(accounts, 10.0);
        deposit(savingAccounts, 100.0);

        display(accounts);
        display(savingAccounts);

        withdraw(checkingAccounts, 1000);
        display(checkingAccounts);

        deposit(trustAccounts, 6000);
        display(trustAccounts);

        for (auto i{0}; i < 4; ++i) {
            withdraw(trustAccounts, 100);
        }
        display(trustAccounts);

        withdraw(trustAccounts, 3000);
        display(trustAccounts);

        destroyAllAccounts(accounts, savingAccounts, checkingAccounts, trustAccounts);

        return EXIT_SUCCESS;
    }
}
