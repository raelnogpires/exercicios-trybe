export function greeter(name: string): string {
  return `Olá, ${name}! Como você está?`
}

export function personAge(name: string, years: number, birthday: boolean): string {
  if (!birthday) {
    return `Olá ${name}, você tem ${years} anos!`;
  }

  return `Olá ${name}, você tem ${years} anos. Espere, hoje é seu aniversário? Parabéns! :)`
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(b: number, h: number): number {
  return (b * h) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(b: number, h: number): number {
  return b * h;
}
