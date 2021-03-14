#include "challenge_01.h"
#include "IntValue.h"

#include <iostream>
#include <vector>
#include <memory>
#include <algorithm>
#include <cassert>

#include "boost/format.hpp"


namespace section_17_challenge_01 {
    namespace {
        using IntValues = std::vector<std::shared_ptr<IntValue>>;

        int readIntegerFromConsole(std::string_view prompt);

        std::unique_ptr<IntValues> makeIntValues() {
            return std::make_unique<IntValues>();
        }

        void fill(IntValues &values, int num) {
            assert(num > 0);

            for (auto i { 0 }; i < num; ++i) {
                auto promptFmt = boost::format("Enter data point value [ %1% ]: ") % i;
                auto valuePtr = std::make_shared<IntValue>(readIntegerFromConsole(promptFmt.str()));
                values.push_back(std::move(valuePtr));
            }
        }

        void display(const IntValues &values) {
            std::cout << "Values: [ ";
            std::for_each(values.begin(), values.end(), [](const auto &value) {
                std::cout << value->getValue() << ' ';
            });
            std::cout << "]" << std::endl;
        }

        void ignoreLine() {
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        }

        int readIntegerFromConsole(const std::string_view prompt) {
            std::cout << prompt;

            int userInput{0};
            std::cin >> userInput;
            ignoreLine();
            return userInput;
        }
    }

    int run() {
        std::unique_ptr<IntValues> values { makeIntValues() };

        int numValues { readIntegerFromConsole("How many data points? ") };
        fill(*values, numValues);
        display(*values);

        return EXIT_SUCCESS;
    }
}
