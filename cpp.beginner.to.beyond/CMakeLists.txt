cmake_minimum_required(VERSION 3.17)

project(cpp_beginner_to_beyond C CXX)

set(CMAKE_CXX_STANDARD 17)

add_executable(cpp_beginner_to_beyond
        main.cpp lectures.h
        section_06/exercise_01.cpp section_06/exercise_01.h
        section_06/lecture_50.h section_06/lecture_50.cpp
        section_07/lecture_55.h section_07/lecture_55.cpp
        section_07/lecture_59.h section_07/lecture_59.cpp
        section_07/challenge_01.h section_07/challenge_01.cpp
        section_08/challenge_01.h section_08/challenge_01.cpp
        section_09/exercise_01.h section_09/exercise_01.cpp
        section_09/challenge_01.h section_09/challenge_01.cpp
        section_10/exercise_01.h section_10/exercise_01.cpp
        section_10/exercise_02.h section_10/exercise_02.cpp
        section_10/challenge_01.h section_10/challenge_01.cpp 
        section_10/assignment_01.h section_10/assignment_01.cpp
        section_11/lecture_102.h section_11/lecture_102.cpp
        section_12/lecture_123.h section_12/lecture_123.cpp
        section_12/challenge_01.h section_12/challenge_01.cpp
        section_13/challenge_01/challenge_01.h section_13/challenge_01/challenge_01.cpp
        section_13/challenge_01/Movie.h section_13/challenge_01/Movies.cpp section_13/challenge_01/Movies.h
        section_14/extra_01/extra_01.h section_14/extra_01/extra_01.cpp
        section_14/extra_01/Vector2D.cpp section_14/extra_01/Vector2D.h
        section_14/challenge_01/challenge_01.h section_14/challenge_01/challenge_01.cpp
        section_14/challenge_01/MyString.cpp section_14/challenge_01/MyString.h
        section_15/challenge_01/challenge_01.h section_15/challenge_01/challenge_01.cpp
        section_15/challenge_01/Account.cpp section_15/challenge_01/Account.h
        section_15/challenge_01/SavingsAccount.cpp section_15/challenge_01/SavingsAccount.h
        section_15/challenge_01/CheckingAccount.cpp section_15/challenge_01/CheckingAccount.h
        section_15/challenge_01/TrustAccount.cpp section_15/challenge_01/TrustAccount.h
        section_16/challenge_01/challenge_01.h section_16/challenge_01/challenge_01.cpp
        section_16/challenge_01/Account.cpp section_16/challenge_01/Account.h
        section_16/challenge_01/SavingsAccount.cpp section_16/challenge_01/SavingsAccount.h
        section_16/challenge_01/CheckingAccount.cpp section_16/challenge_01/CheckingAccount.h
        section_16/challenge_01/TrustAccount.cpp section_16/challenge_01/TrustAccount.h section_16/challenge_01/Printable.cpp section_16/challenge_01/Printable.h)