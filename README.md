Toy Robot Simulator
===============

> A toy robot simulator written in React + Javascript

## Description:
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. 

There are no other obstructions on the table surface. 

The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed. 

## The application should be able to accept the following commands:
The commands will be inputed via a multi-line text input, ether individually or in separate lines:

The commands will have the follong form:
```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

- `PLACE` will put the toy robot on the table in position `X,Y` and facing `NORTH`, `SOUTH`, `EAST` or `WEST`. 
  -  The origin (0,0) can be considered to be the SOUTH WEST most corner. 
  -  The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed. 
-  `MOVE` will move the toy robot one unit forward in the direction it is currently facing. 
-  `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified direction without changing the position of the robot. 
-  `REPORT` will announce the `X,Y` and `F` of the robot. This can be in any form, but standard output is sufficient. 
-  A robot that is not on the table should ignore the `MOVE`, `LEFT`, `RIGHT` and `REPORT` commands. 
-  Input can be from a file, or from standard input, as the developer chooses. 
-  Provide test data to exercise the application. 


## Here are some examples of possible input/output:
```
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```
```
PLACE 0,0,NORTH
LEFT
REPORT 
Output: 0,0,WEST
```
```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT 
Output: 3,3,NORTH
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
