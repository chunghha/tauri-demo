use serde::{Deserialize, Serialize};
use std::time::{Duration, Instant};

#[derive(Deserialize, Serialize)]
struct Fibonacci {
  number: usize,
  fibonacci: usize,
  duration: Duration,
}

trait IFibonacci {
  fn generate(n: usize) -> Self;
}

impl IFibonacci for Fibonacci {
  fn generate(n: usize) -> Self {
    let start = Instant::now();
    let fib = Fib::fib(n);
    let duration = Instant::now() - start;

    Fibonacci { number: n, fibonacci: fib, duration }
  }
}

struct Fib {}

trait IFib {
  fn fib(n: usize) -> usize;
}

impl IFib for Fib {
  fn fib(n: usize) -> usize {
    if n < 2 {
      1
    } else {
      // the combinatorial definition
      let mut memo = [1, 1];
      let mut n = n - 2;

      loop {
        let [a, b] = memo;
        let c = a + b;

        if n == 0 {
          return c;
        }

        memo = [b, c];
        n -= 1;
      }
    }
  }
}

pub fn get_fibonacci(src_number: String) -> String {
  let n: usize = src_number.parse().unwrap_or(0);

  let res = Fibonacci::generate(n);

  res.fibonacci.to_string()
}
