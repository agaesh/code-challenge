# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.


# Code Challenge – Problem 1: Summations (Completed)

## 📌 Overview
This project demonstrates three different approaches to solving the summation problem (sum of numbers from 1 to _n_):

1. **For Loop** – Iterative summation
2. **Array.reduce** – Using JavaScript’s built-in reducer
3. **Recursion** – Recursive function calls

The functions are exposed via an **Express.js server** with endpoints to test and view results
---

## 🚀 Features
- `sum_to_n_a(n)` → Summation using a `for` loop
- `sum_to_n_b(n)` → Summation using `Array.reduce`
- `sum_to_n_c(n)` → Summation using recursion
- Express server with:
  - `/problem1` → Returns JSON results of all three summation methods