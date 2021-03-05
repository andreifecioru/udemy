#pragma once

#include <iostream>
#include <cstring>

class MyString {
    char* m_buff{nullptr};
    std::size_t m_size{0};

    friend std::ostream& operator<<(std::ostream& os, const MyString& rhs);

public:
    MyString() {
        m_buff = new char[1];
        m_buff[0] = '\0';
        m_size = 1;
    }

    explicit MyString(std::size_t size) {
        m_buff = new char[size + 1];
        m_buff[0] = '\0';
        m_size = size;
    }

    explicit MyString(const char* src);

    MyString(const MyString& other); // copy
    MyString(MyString&& other) noexcept; // move

    ~MyString() {
        delete [] m_buff;
    }

public:
    MyString& operator=(const MyString& other);
    MyString& operator=(MyString&& other) noexcept;

    bool operator==(const MyString& other) const;
    bool operator!=(const MyString& other) const;
    bool operator>(const MyString& other) const;
    bool operator<(const MyString& other) const;

    MyString operator-() const;
    MyString operator+(const MyString& other) const;
    MyString& operator+=(const MyString& other);
    MyString operator*(int times) const;
    MyString& operator*=(int times);

    MyString& operator++();
    MyString operator++(int);
};
