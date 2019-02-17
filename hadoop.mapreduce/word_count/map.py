#!/usr/bin/env python
import sys

if __name__ == '__main__':
    for line in sys.stdin:
        for word in line.split():
            print('{0}\t{1}'.format(word, 1))