cmake_minimum_required(VERSION 3.17)
project(cpp_beginner_to_beyond)

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
)