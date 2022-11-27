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
    match n {
      0 => 0,
      1 => 1,
      _ => Fib::fib(n - 1) + Fib::fib(n - 2),
    }
  }
}

pub fn get_fibonacci(src_number: String) -> String {
  let n: usize = src_number.parse().unwrap_or(0);

  let res = Fibonacci::generate(n);

  res.fibonacci.to_string()
}
