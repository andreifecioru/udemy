#!/usr/bin/env python

import sys


if __name__ == '__main__':
    (current_key, count) = (None, 0)

    for line in sys.stdin:
        (key, value) = line.strip().split('\t')
        if current_key and key != current_key:
            print('{0}\t{1}'.format(current_key, count))
            (current_key, count) = (key, int(value))
        else:
            (current_key, count) = (key, count + int(value))
