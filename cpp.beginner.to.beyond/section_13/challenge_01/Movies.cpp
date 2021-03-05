#include "Movies.h"

#include <algorithm>
#include <iostream>
#include <cassert>


namespace section_13_challenge_01 {
    namespace {
        std::string_view movieRating2String(const MovieRating rating) {
            switch (rating) {
                case MovieRating::G: return MR_G;
                case MovieRating::PG: return MR_PG;
                case MovieRating::PG_13: return MR_PG_13;
                case MovieRating::R: return MR_R;
                default:
                    assert(false);
            }
        }
    }

    bool Movies::addMovie(const std::string& name, MovieRating rating, int watched) {
        auto found {
            std::find_if(movies.begin(), movies.end(),
                         [&name](const Movie& movie) { return name == movie.getName(); })
        };

        if (found == movies.end()) {
            movies.emplace_back(name, rating, watched);
            return true;
        }

        return false;
    }

    void Movies::displayMovies() const {
        std::cout << "--------[ MOVIE LIST ]------------\n";

        if (movies.empty()) {
            std::cout << "No movies available.\n";
        } else {
            std::for_each(movies.begin(), movies.end(), [](const Movie& movie) {
                std::cout << movie.getName()
                          << "\n\t rating: " << movieRating2String(movie.getRating())
                          << "\t views: " << movie.getWatched() << "\n\n";
            });
        }

        std::cout << "------------------------------------" << std::endl;
    }

    bool Movies::watchMovie(const std::string &name) {
        auto found {
                std::find_if(movies.begin(), movies.end(),
                             [&name](const Movie& movie) { return name == movie.getName(); })
        };

        if (found != movies.end()) {
            found->incrementWatched();
            return true;
        }

        return false;
    }
}
