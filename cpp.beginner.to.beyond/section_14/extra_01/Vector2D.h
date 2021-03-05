#pragma once

#include <array>
#include <cstring>
#include <iostream>


class Vector2D {
private:
    static int nextId;

    int* points{nullptr};
    int id{0};

    friend std::ostream& operator<<(std::ostream& os, const Vector2D& rhs);
    friend std::istream& operator>>(std::istream& is, Vector2D& rhs);

public:
    Vector2D(int x, int y) {
        id = ++nextId;
        std::cout << "[ " << id << "] Delegated constructor." << std::endl;
        points = new int[2]{x, y};
    }

    Vector2D(): Vector2D {0, 0} {
        std::cout << "[ " << id << "] Default constructor." << std::endl;
    }

    Vector2D(const Vector2D& other);

    Vector2D(Vector2D&& other)  noexcept;

    ~Vector2D() {
        std::cout << "[ " << id << "] Destructor." << std::endl;
        delete [] points;
    }

    [[nodiscard]] int getX() const { return points[0]; }
    void setX(const int x) { points[0] = x; }

    [[nodiscard]] int getY() const { return points[1]; }
    void setY(const int y) { points[1] = y; }

    Vector2D& operator=(const Vector2D& rhs);
    Vector2D& operator=(Vector2D&& rhs) noexcept ;

    Vector2D operator+(const Vector2D& other) const;
    Vector2D& operator+=(const Vector2D& other);

    // Pre-increment
    Vector2D& operator++();
    // Post-increment
    Vector2D operator++(int) &;

};



