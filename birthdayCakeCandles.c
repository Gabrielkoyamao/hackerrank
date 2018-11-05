#include <stdio.h>

int birthdayCakeCandles(int ar_count,int *ar);

int main(){
    
    int v[] = {3,2,1,3};

    birthdayCakeCandles(4, v);
    
    return 0;
}

int birthdayCakeCandles(int ar_count,int *ar){
    
    int i = 0;
    int j = 0;
    int cont = 0;
    int maior = ar[0];

    while(i < ar_count ){

        if(maior < ar[i]){
            maior = ar[i];
        }
        i++;
    }

    while(j < ar_count){
        if(maior == ar[j]){
            cont++;
        }
        j++;
    }

    printf("%d", cont);
    return cont;
}