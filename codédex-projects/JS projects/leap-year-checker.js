// A JavaScript program that only displays numbers that are leap years from 2000 to 3000.

for (i = 2000; i <= 3000; i++) {
    if (((i % 4 == 0) && !(i % 100 == 0)) || (i % 400 == 0)) {
      console.log(i);
    }
  }