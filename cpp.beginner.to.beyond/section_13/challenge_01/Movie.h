#pragma once

#include <string>
#include <utility>
#include <string_view>

namespace section_13_challenge_01 {
    constexpr char MR_G[] = "G";
    constexpr char MR_PG[] = "PG";
    constexpr char MR_PG_13[] = "PG_13";
    constexpr char MR_R[] = "R";

    enum class MovieRating { G, PG, PG_13, R };

    class Movie {
    private:
        std::string name;
        MovieRating rating;
        int watched;

    public:
        Movie(std::string name, MovieRating rating, int watched)
            : name{std::move(name)}, rating{rating}, watched{watched} {}

        [[nodiscard]] std::string_view getName() const { return name; }
        [[nodiscard]] MovieRating getRating() const { return rating; }
        [[nodiscard]] int getWatched() const { return watched; }
        void incrementWatched() { watched++; }
    };
}




