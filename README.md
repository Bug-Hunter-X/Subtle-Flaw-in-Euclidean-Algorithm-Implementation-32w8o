# Subtle Flaw in Euclidean Algorithm Implementation

This repository demonstrates a common error in implementing the Euclidean algorithm in JavaScript to check for multiples.

The `bug.js` file contains an implementation that produces incorrect results for certain inputs. The `bugSolution.js` file shows the corrected implementation.

## Problem

The Euclidean algorithm is used to find the greatest common divisor (GCD) of two numbers. A common mistake in adapting it to check for multiples is improper handling of base cases and input scenarios.  The provided code makes this mistake, leading to unexpected outputs.

## Solution

The correction involves carefully examining the base cases and ensuring appropriate handling of division and comparisons.