# Challenge https://www.hackerrank.com/challenges/migratory-birds/problem
# ideia é contar quantos repetem mais e guardar oq repete mais em uma variavel
# Problema: Precisa melhorar a performace do programa, pois demora muito com ~ 74mil rodando com dois fors
def migratoryBirds( arr ):
	cont=0
	aux=0
	num=0
	array = []
	for i in range(73966):
		array.append(i)
	arr = array
	for i in range( len(arr) ):
		for j in range( len(arr) ):
			# Debug
			# print('arr[i]: ', arr[i], ' arr[j]: ', arr[j], ' i: ', i, ' j: ', j, ' cont: ', cont, ' aux: ', aux, 'num: ', num)
			if(arr[i] == arr[j]):
				cont+=1
			if(cont > aux):
				aux = cont
				num = arr[i]
			if((cont == aux) & (arr[i] != num)):
				if(arr[i] < num):
					num = arr[i]
		cont=0
	return num
print(migratoryBirds( [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4] ))