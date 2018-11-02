def diagonalDifference(arr):

    dp = 0
    ds = 0

    # Diagonal principal
    for x in range(len(arr)):
        dp += arr[x][x]

    # Diagonal secundaria
    for x in range(len(arr)):
        for y in range(len(arr)):

            if(x + y == len(arr) - 1):
                ds += arr[x][y]
    
    return ds, dp

print(diagonalDifference((
                        [11, 2, 4], 
                        [4,  5, 6], 
                        [10, 8, -12] 
)))