#include "lecture_123.h"

#include <iostream>
#include <cstdlib>

namespace section_12_lecture_123 {

    using Point3D = struct { double x, y, z; };


    int run() {
        std::cout << "Section: 12 - Lecture: 123" << std::endl;

        Point3D *point = new Point3D;

        std::cout << "Point address: " << point << std::endl;
        std::cout << "Point address incremented: " << point + 1 << std::endl;

        std::cout << "Size of point structure: " << sizeof(*point) << std::endl;

        delete point;

        return EXIT_SUCCESS;
    }

}