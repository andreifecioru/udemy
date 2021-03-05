#include "Vector2D.h"

std::ostream& operator<<(std::ostream& os, const Vector2D& rhs) {
    os << "<#" << rhs.id << ": " << rhs.getX() << ", " << rhs.getY() << '>';
    return os;
}

std::istream& operator>>(std::istream& is, Vector2D& rhs) {
    int x{}, y{};
    is >> x >> y;

    rhs.setX(x);
    rhs.setY(y);

    return is;
}

int Vector2D::nextId {0};

Vector2D::Vector2D(const Vector2D& other)
    : Vector2D{other.getX(), other.getY()} {
    std::cout << "[ " << id << "] Copy constructor." << std::endl;
}

Vector2D::Vector2D(Vector2D&& other)  noexcept {
    std::cout << "[ " << id << "] Move constructor." << std::endl;

    delete [] points;
    id = other.id;
    points = other.points;
    other.points = nullptr;
}

Vector2D& Vector2D::operator=(const Vector2D &rhs) {
    std::cout << "[ " << id << "] Copy assignment." << std::endl;
    if (this == &rhs)
        return *this;

    std::memcpy(points, rhs.points, 2);

    return *this;
}

Vector2D& Vector2D::operator=(Vector2D &&rhs) noexcept {
    std::cout << "[ " << id << "] Move assignment." << std::endl;

    if (this == &rhs)
        return *this;

    delete [] points;
    id = rhs.id;
    points = rhs.points;
    rhs.points = nullptr;

    return *this;
}

Vector2D Vector2D::operator+(const Vector2D &other) const {
    std::cout << "Operator +" << std::endl;
    Vector2D temp;
    temp.setX(this->getX() + other.getX());
    temp.setY(this->getY() + other.getY());

    return temp;
}

Vector2D& Vector2D::operator+=(const Vector2D &other) {
    std::cout << "Operator +=" << std::endl;

    setX(getX() + other.getX());
    setY(getY() + other.getY());

    return *this;
}

Vector2D& Vector2D::operator++() {
    std::cout << "Operator pre-increment" << std::endl;

    setX(getX() + 1);
    setY(getY() + 1);

    return *this;
}

Vector2D Vector2D::operator++(int) & {
    std::cout << "Operator post-increment" << std::endl;

    const Vector2D temp{*this};
    operator++();
    return temp;
}
