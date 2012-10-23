#include <stdio.h>

int i = 0;

// 'a' and 'b' are stack variables and exist only during execution
void add (int a, int b) {
  i = a + b;
};

int main(void) {
  add(1,2); // stack frame is created in stack segment
  printf("sum is: %i\n",i);
  return 0;
};
