#!/bin/bash
#scipts from http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc9

# for(( i = 0; i < 3600; i++ ))
# do
#     clear
#     echo "$i..."
#     sleep 1
# done

# ls -l

# grep da * 2


# ls -l | grep "\.txt"

# T1="foo"
# T2="bar"
# if [ "$T1" = "$T2" ]; then
#     echo expression evaluated as true
# else
#     echo expression evaluated as false
# fi
            

# for i in $( ls ); do
#     echo item: $i
# done


# for i in `seq 1 10`;
# do
#     echo $i
# done   


# COUNTER=0
# while [  $COUNTER -lt 10 ]; do
#     echo The counter is $COUNTER
#     let COUNTER=COUNTER+1 
# done


# COUNTER=20
# until [  $COUNTER -lt 10 ]; do
#     echo COUNTER $COUNTER
#     let COUNTER-=1
# done

# Functions

# function quit {
#     echo exit
# }
# function hello {
#     echo Hello!
# }
# hello
# quit
# echo foo 

# functions with parameters
# function quit {
#     exit
# }  
# function e {
#     echo $1 
# }  
# e Hello
# e World
# echo quit
# echo foo 


# Select
# OPTIONS="Hello Quit"
# select opt in $OPTIONS; do
#     if [ "$opt" = "Quit" ]; then
#     echo done
#     exit
#     elif [ "$opt" = "Hello" ]; then
#     echo Hello World
#     else
#     clear
#     echo bad option
#     fi
# done