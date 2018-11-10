# This is the Interview Preparation Kit
#Challenge https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
def sockMerchant(arr):
    def exist(arr, n):
        flag = 0
        if(len(arr) > 0):
            for i in range(len(arr)):
                if(arr[i] == n):
                    flag = 1
            if(flag==0):
                return False
            else:
                return True
        else:
            return False
    cont=0
    par=0
    jafoi=[]
    for i in range(len(arr)):
        for j in range(len(arr)):

            # Debug
            # print('arr[i]: ', arr[i], ' jafoi: ', jafoi, ' exist: ', exist(jafoi, arr[i]))

            if( exist(jafoi, arr[i]) == False):
                if(arr[i] == arr[j]):
                    cont+=1
                if(j == len(arr) - 1):
                    # Debug
                    # print("cont:", cont, " par: ", par)
                    if(cont%2!=0):
                        par+=(cont-1)/2
                    else:
                        par+=cont/2
                    jafoi.append(arr[i])
        cont=0
    print(int(par))
    return int(par)
sockMerchant( [10, 20, 20, 10, 10, 30, 50, 10, 20] )