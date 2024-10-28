# Max Profit Problem

This project solves the problem of maximizing profit by building Theatres, Pubs, or Commercial Parks on Mars land within a given time limit using JavaScript.

## Problem Description
Mr. X can develop:
- **Theatre** : Takes 5 time units, generates $1500 per unit.
- **Pub** : Takes 4 time units, generates $1000 per unit.
- **Commercial Park** : Takes 10 time units, generates $3000 per unit.

### Goal
Given `n` time units, find the optimal combination of buildings to maximize earnings.

## Input & Output
- **Input**: Total time units for building.
- **Output**: Optimal count of Theatres (T), Pubs (P), and Commercial Parks (C) and total earnings.

### Example Cases
1. **Time Unit**: 7 → **Earnings**: $3000  
   **Solution**: `T: 1, P: 0, C: 0` or `T: 0, P: 1, C: 0`
   
2. **Time Unit**: 8 → **Earnings**: $4500  
   **Solution**: `T: 1, P: 0, C: 0`
   
3. **Time Unit**: 13 → **Earnings**: $16500  
   **Solution**: `T: 2, P: 0, C: 0`

