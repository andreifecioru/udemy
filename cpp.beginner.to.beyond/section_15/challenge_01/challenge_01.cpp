#include "challenge_01.h"

#include "Account.h"
#include "SavingsAccount.h"
#include "CheckingAccount.h"
#include "TrustAccount.h"

#include <iostream>
#include <vector>
#include <algorithm>

namespace section_15_challenge_01 {
    namespace {
        void createAccounts(
            std::vector<Account>& accounts,
            std::vector<SavingsAccount>& savingAccounts,
            std::vector<CheckingAccount>& checkingAccounts,
            std::vector<TrustAccount>& trustAccounts) {

            accounts.emplace_back();
            accounts.emplace_back("Jim");
            accounts.emplace_back("Jane", 1000);
            accounts.emplace_back("George", 500);

            savingAccounts.emplace_back();
            savingAccounts.emplace_back("Roland");
            savingAccounts.emplace_back("Kate", 2000, 2);
            savingAccounts.emplace_back("Mike", 700, 5);

            checkingAccounts.emplace_back();
            checkingAccounts.emplace_back("Helen");
            checkingAccounts.emplace_back("Anna", 2000);
            checkingAccounts.emplace_back("Kevin", 700, 5.0);

            trustAccounts.emplace_back();
            trustAccounts.emplace_back("Tim");
            trustAccounts.emplace_back("Jack", 2000, 2);
            trustAccounts.emplace_back("Jow", 700, 5);
        }

        template <class AccountT>
        void display(const std::vector<AccountT>& accounts) {
            std::cout << "\n================[ Accounts ]======================\n";
            if (accounts.empty()) {
                std::cout << "No accounts available";
            } else {
                std::for_each(accounts.begin(), accounts.end(), [](const auto& account) {
                    std::cout << account << '\n';
                });
            }

            std::cout << std::endl;
        }

        template <class AccountT>
        void deposit(std::vector<AccountT>& accounts, const double amount) {
            std::for_each(accounts.begin(), accounts.end(), [amount](auto& account) {
                if (!account.deposit(amount))
                    std::cout << "Failed to deposit " << amount << " to: " << account << std::endl;
            });
        }

        template <class AccountT>
        void withdraw(std::vector<AccountT>& accounts, const double amount) {
            std::for_each(accounts.begin(), accounts.end(), [amount](auto& account) {
                if (!account.withdraw(amount))
                    std::cout << "Failed to withdraw " << amount << " from: " << account << std::endl;
            });
        }
    }

    int run() {
        std::vector<Account> accounts;
        std::vector<SavingsAccount> savingAccounts;
        std::vector<CheckingAccount> checkingAccounts;
        std::vector<TrustAccount> trustAccounts;

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

        return EXIT_SUCCESS;
    }
}
