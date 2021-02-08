#include "lecture_50.h"

#include <iostream>
#include <cstdlib>

namespace sec_06_lecture_50 {
    using namespace std;
    using namespace sec_06_lecture_50::constants;

    using estimate_t = struct {
        double cost;
        double tax_amount;
        double total_cost;
    };

    using room_count_t = struct {
        short small;
        short large;
    };

    static estimate_t compute_estimate(room_count_t &room_count) {
        estimate_t estimate;

        double small_room_cost = cost_per_small_room * room_count.small;
        double large_room_cost = cost_per_large_room * room_count.large;

        estimate.cost = small_room_cost + large_room_cost;
        estimate.tax_amount = sales_tax_percent * estimate.cost / 100.0;
        estimate.total_cost = estimate.cost + estimate.tax_amount;

        return estimate;
    }

    static room_count_t get_user_input() {
        cout << "Welcome to the carpet cleaning service!\n\n";

        cout << "Enter the number of small rooms: ";
        short no_of_small_rooms {};
        cin >> no_of_small_rooms;

        cout << "Enter the number of large rooms: ";
        short no_of_large_rooms {};
        cin >> no_of_large_rooms;

        return room_count_t {no_of_small_rooms, no_of_large_rooms};
    }

    static void show_report(room_count_t room_count, estimate_t& estimate) {
        cout << "\nEstimate for carpet cleaning service:\n"
             << "Number of small rooms: " << room_count.small << endl
             << "Number of large rooms: " << room_count.large << endl
             << "Price per small room: $" << cost_per_small_room << endl
             << "Price per large room: $" << cost_per_large_room << endl
             << "Cost: $" << estimate.cost << endl
             << "Tax: $" << estimate.tax_amount << endl
             << "===============================\n"
             << "Total estimate: $" << estimate.total_cost << endl
             << "This estimate is valid for " << valid_days << " days." << endl;
    }

    int run() {

        room_count_t room_count { get_user_input() };

        estimate_t estimate = compute_estimate(room_count);
        show_report(room_count, estimate);

        return EXIT_SUCCESS;
    }
}
