#!/usr/bin/env python

def vowels(str):
    matches = str.match(/[aeiou]/gi)
    if matches:
        return len(matches)
    else:
        return 0





# def vowels(str):
#     vowel = ['a','e','i','o','u']
#     count = 0;
#
#     for letter in str.lower():
#         if letter in vowel:
#             count++
#
#     print(count)
