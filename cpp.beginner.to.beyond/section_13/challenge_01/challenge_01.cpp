#include "challenge_01.h"

#include "Movies.h"

#include <iostream>


namespace section_13_challenge_01 {
    namespace {
        void ignoreLine() {
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        }

        void buildInitialMovieList(Movies& movies) {
            movies.addMovie("Matrix", MovieRating::PG_13, 1);
            movies.addMovie("Inception", MovieRating::PG, 3);
            movies.addMovie("Madagascar", MovieRating::G, 4);
        }

        MovieRating getMovieRatingFromUser() {
            while(true) {
                std::cout << "What is the rating of the movie? \n"
                          << "1 - G\n"
                          << "2 - PG\n"
                          << "3 - G\n"
                          << "4 - R\n";
                char ratingSelection{};
                std::cin >> ratingSelection;
                ignoreLine();

                switch (ratingSelection) {
                    case '1': return MovieRating::G;
                    case '2': return MovieRating::PG;
                    case '3': return MovieRating::PG_13;
                    case '4': return MovieRating::R;
                    default:
                        std::cout << "Invalid selection. Try again." << std::endl;
                        continue;
                }
            }
        }

        std::string getMovieNameFromUser() {
            while (true) {
                std::cout << "What is the name of the movie? ";
                std::string name;
                std::getline(std::cin, name);

                if (name.empty()) {
                    std::cout << "The name of the movie cannot be empty string." << std::endl;
                    continue;
                }

                return name;
            }
        }

        void handleAddNewMovie(Movies& movies) {
            std::string name { std::move(getMovieNameFromUser()) };
            bool success = movies.addMovie(name, getMovieRatingFromUser(), 0);

            if (success) {
                std::cout << "Added movie: " << name << std::endl;
            } else {
                std::cout << "Movie is already in our data-base." << std::endl;
            }
        }

        void handleIncrementViews(Movies& movies) {
            std::string name { std::move(getMovieNameFromUser()) };
            bool success = movies.watchMovie(name);

            if (success) {
                std::cout << "Incremented views for movie: " << name << std::endl;
            } else {
                std::cout << "This movie is not in our database." << std::endl;
            }
        }

        void startApp(Movies& movies) {
            std::cout << "Welcome to the movie data-base." << std::endl;


            while (true) {
                std::cout << "\n\nChoose of of the following: \n"
                          << " 1 - List all movies\n"
                          << " 2 - Add new movie\n"
                          << " 3 - Watch existing movie\n"
                          << " Q - Quit application\n"
                          << "\n> ";

                char userInput{};
                std::cin >> userInput;
                ignoreLine();

                switch (std::tolower(userInput)) {
                    case '1':
                        movies.displayMovies();
                        break;
                    case '2':
                        handleAddNewMovie(movies);
                        break;
                    case '3':
                        handleIncrementViews(movies);
                        break;
                    case 'q':
                        return;
                    default:
                        std::cout << "Invalid selection. Try again..." << std::endl;
                        continue;
                }
            }
        }
    }

    int run() {
        Movies movies;
        buildInitialMovieList(movies);
        startApp(movies);

        return EXIT_SUCCESS;
    }
}
