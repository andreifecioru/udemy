#include "MyString.h"

#include <iostream>

MyString::MyString(const char* const src) {
    m_size = strlen(src);
    m_buff = new char[m_size + 1];
    strcpy(m_buff, src);
}

// copy constructor
MyString::MyString(const MyString& other) {
    std::cout << "Copy ctor." << std::endl;

    m_size = other.m_size;
    m_buff = new char[m_size];
    strcpy(m_buff, other.m_buff);
}

// move constructor
MyString::MyString(MyString&& other) noexcept {
    std::cout << "Move ctor." << std::endl;

    delete [] m_buff;
    m_buff = other.m_buff;
    m_size = other.m_size;
    other.m_buff = nullptr;
}

MyString& MyString::operator=(const MyString& other) {
    if (this == &other)
        return *this;

    delete [] m_buff;
    m_size = other.m_size;
    m_buff = new char[m_size + 1];
    strcpy(m_buff, other.m_buff);

    return *this;
}

MyString& MyString::operator=(MyString&& other) noexcept {
    if (this == &other)
        return *this;

    delete [] m_buff;
    m_size = other.m_size;
    m_buff = other.m_buff;
    other.m_buff = nullptr;

    return *this;
}

bool MyString::operator==(const MyString& other) const {
    if (this == &other)
        return true;
    return strcmp(m_buff, other.m_buff) == 0;
}

bool MyString::operator!=(const MyString& other) const {
    return !(*this == other);
}

bool MyString::operator<(const MyString& other) const {
    if (this == &other)
        return false;
    return strcmp(m_buff, other.m_buff) < 0;
}

bool MyString::operator>(const MyString& other) const {
    return !(*this < other);
}

MyString MyString::operator-() const {
    MyString temp { *this };
    for (auto i{0}; i < temp.m_size; ++i) {
        temp.m_buff[i] = static_cast<char>(tolower(temp.m_buff[i]));
    }

    return temp;
}

MyString MyString::operator+(const MyString& other) const {
    MyString result{m_size + other.m_size};
    strcpy(result.m_buff, m_buff);
    strcat(result.m_buff, other.m_buff);

    return result;
}

MyString& MyString::operator+=(const MyString& other) {
    m_size += other.m_size;

    char *buff = new char[m_size + 1];
    strcpy(buff, m_buff);
    strcat(buff, other.m_buff);

    delete [] m_buff;
    m_buff = buff;

    return *this;
}

MyString MyString::operator*(const int times) const {
    MyString result{};

    for (auto i{0}; i < times; ++i) {
        result += *this;
    }

    return result;
}

MyString& MyString::operator*=(const int times) {
    if (times <= 1) return *this;

    for (auto i{1}; i < times; ++i) {
        (*this) += (*this);
    }

    return *this;
}

MyString& MyString::operator++() {
    for(auto i{0}; i < m_size; ++i) {
        m_buff[i] = static_cast<char>(toupper(m_buff[i]));
    }

    return *this;
}

MyString MyString::operator++(int) {
    MyString temp { *this };
    ++(*this);
    return temp;
}

std::ostream& operator<< (std::ostream& os, const MyString& rhs) {
    os << rhs.m_buff;
}

