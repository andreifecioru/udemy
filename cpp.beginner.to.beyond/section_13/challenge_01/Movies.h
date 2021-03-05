#pragma once

#include "Movie.h"

#include <vector>
#include <string>


namespace section_13_challenge_01 {
    class Movies {
    private:
        std::vector<Movie> movies;

    public:
        bool addMovie(const std::string& name, MovieRating rating, int watched);
        bool watchMovie(const std::string& name);
        void displayMovies() const;
    };
}



