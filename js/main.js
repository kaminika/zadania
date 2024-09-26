/* Stwórz obiekt `samochod`, który posiada właściwości `marka`,
`model`, `rok`, oraz metodę `pokażInfo`, która wyświetli w konsoli informacje o
samochodzie. */

/* Dodaj do obiektu `samochod` metodę `wiek`, która przyjmie jako
parametr bieżący rok i zwróci wiek samochodu. */

const car = {
    brand: "Nissan",
    model: "micra",
    year: 2020,

    printInfo() {
        return `information about the car ${this.brand} ${this.model} ${this.year}`;
      },

    age : function() {
        let data=new Date()
        let age=Number(data.getFullYear())-this.year;
        if(age==1) { age=age+' year'; }
        else { age=age+' years'; }
        return age;
    }


   
};

console.dir(car.printInfo());



console.log('age of the vehicle: ' + car.age());

/* !!!!! */


/* Stwórz obiekt `student` z właściwościami `imie`, `nazwisko`,
`oceny`. Dodaj metodę `srednia`, która policzy i zwróci średnią ocen studenta. */

/* Zmodyfikuj obiekt `student`, dodając metodę `dodajOcene`, która
doda nową ocenę do tablicy ocen studenta */

const student = {
    name: "Klaudia",
    surname: "Krawczak",
    grades: [3, 4, 5, 3],
    countAverage() {
      let sum = 0;
  
      for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
        if(this.countAverage>=4.75) {
        console.log(' Student dostanie czerwony pasek');
         } else if (
            console.log('Student nie dostanie czerwonego paska'));
        return this.countAverage;

      }
   
      return sum/this.grades.length

      
    },
    addGrade(grade) {
      this.grades.push(grade)
    }


    /* Napisz metodę, która sprawdzi czy uczeń dostanie czerwony pasek - metoda zwraca prawdę lub fałsz */
  };
  
  console.log(student.countAverage());
  
  student.addGrade(5)
  student.addGrade(2)
  
  console.log(student.grades);
  console.log(student.countAverage());

  /*   countPasek() {
        if(this.countAverage>=4,75)
            console.log('Student dostanie czerwony pasek')
        else 
            console.log('Student nie dostanie czerwonego paska')
        return this.countAverage;
    } */
      





/* Stwórz obiekt `ksiazka`, który posiada właściwości `tytul`, `autor`,
`liczbaStron`, oraz metodę `opis`, która zwraca ciąg znaków opisujący książkę. */

const book = {
    title: "Duch",
    author: "Danielle Steel",
    numberOfPages: 200,

    printInfo() {
        return `information about the book ${this.title} ${this.author} ${this.numberOfPages}`;
      },

}

console.dir(book.printInfo());


/* !!!! */

/* Stwórz obiekt `kontoBankowe`, który posiada właściwości
`wlasciciel`, `saldo`, oraz metodę `wplac`, która zwiększy saldo o podaną kwotę. */

/* Dodaj do obiektu `kontoBankowe` metodę `wyplac`, która zmniejszy
saldo o podaną kwotę, o ile kwota nie przekracza bieżącego salda. */

const bankAccount = {
    owner: "Jan Nowak",
    balance: 1000,

 /*    deposit(sum) {
        this.balance.push(sum)
    } */
   
};

/* bankAccount.deposit(100) */

/* Stwórz obiekt `film`, który posiada właściwości `tytul`, `rezyser`,
`rok`, oraz metodę `opisFilmu`, która wyświetli wszystkie informacje o filmie w jednym
ciągu znaków */



/* Dodaj do obiektu `film` metodę `czyNowy`, która sprawdzi, czy film
jest nowszy niż 5 lat, i zwróci odpowiednią informację. */

const movie = {
    title:"Anastasia",
    director: "Don Bluth",
    year: 1997,

    
    printInfo() {
        return `information about the movie ${this.title} ${this.director} ${this.year}`;
      },

      ifNew : function() {
        let data=new Date()
        let age=Number(data.getFullYear())-this.year;
        if(age < 5) {'film jest młodszy niż 5'; }
        else { age=age+ ' - Film jest starszy niż 5 lat'; }
        return age;
    }
    
};
  
console.dir(movie.printInfo());
console.log('wiek filmu: ' + movie.ifNew());

/* Stwórz obiekt `telefon` z właściwościami `marka`, `model`,
`rozdzielczosc`, oraz metodę `pokazModel`, która wyświetli markę i model telefonu. */

const phone = {
    brand: "Samsung",
    model: "galaxy s24",
    resolution: "HD",

    printInfo() {
        return `information about the phone ${this.brand} ${this.model}`;
      },
}

console.dir(phone.printInfo());

/* Mając tablicę liczb `[1, 2, 3, 4, 5]`, użyj metody `map`, aby
pomnożyć każdą liczbę przez 2. */



const array12345 = [1, 2, 3, 4, 5]

const arrayx2 = array12345.map(x => x * 2);

console.log(arrayx2);


/* Mając tablicę liczb `[2, 4, 6, 8, 10]`, użyj metody `map`, aby
zmienić każdą liczbę na jej kwadrat. */

const array246810 = [2, 4, 6, 8, 10];

const newArray246810 = array246810.map(x => x * x);

console.log(newArray246810);



/* Mając tablicę obiektów `[{imie: 'Jan', wiek: 25}, {imie: 'Anna', wiek:
32}, {imie: 'Karol', wiek: 45}]`, użyj metody `map`, aby stworzyć tablicę zawierającą
tylko imiona. */

const osoby = [
    {imie: "Jan", wiek: "25"},
    {imie: "Anna", wiek: "32"},
    {imie: "Karol", wiek: "45"},
];

const imiona = osoby.map(osoby => osoby.imie);


console.log(imiona);

/* 
Mając tablicę obiektów `[{imie: 'Jan', wiek: 25}, {imie: 'Anna', wiek:
32}, {imie: 'Karol', wiek: 45}]`, użyj metody `filter`, aby zwrócić osoby, które mają więcej
niż 30 lat. */

const names = [
    {name: 'Jan', age: 25}, 
    {name: 'Anna', age:32}, 
    {name: 'Karol', age: 45}
];

const filteredNames = names.filter(function (name) {

    return name.age > 30
});

console.log(filteredNames);



/* Mając tablicę liczb `[10, 20, 30, 40, 50]`, użyj metody `filter`, aby
wybrać tylko liczby większe niż 25. */

const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter(function (numb) {

    return numb > 25
});

console.log(filteredNumbers);


/* Mając tablicę ciągów znaków `['kot', 'pies', 'lew', 'tygrys']`, użyj
metody `filter`, aby zwrócić tylko te słowa, które mają więcej niż 3 znaki. */

const animals = ["kot", "pies", "lew", "tygrys"];

const result = animals.filter(function (animal) {
    return animal.length > 3
});

console.log(result);

/* Mając tablicę liczb `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, użyj metody
`filter`, aby wybrać liczby parzyste. */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = array.filter(function (arr) {
    return arr % 2 ===0;
});

console.log(filteredArray);

/* Mając tablicę obiektów `[{produkt: 'Laptop', cena: 3000}, {produkt:
'Smartphone', cena: 1500}, {produkt: 'Tablet', cena: 800}]`, użyj metody `filter`, aby
zwrócić tylko te produkty, które kosztują więcej niż 1000 zł. */

const products = [
    { produkt: "Laptop", cena: 3000 },
    { produkt: "Smartphone", cena: 1500 },
    { produkt: "Tablet", cena: 800 },
];

const filteredProducts = products.filter(function (product) {
    return product.cena > 1000
});

console.log(filteredProducts);

/* Mając tablicę obiektów `[{nazwa: 'Jabłko', kategoria: 'owoc'},
{nazwa: 'Marchew', kategoria: 'warzywo'}, {nazwa: 'Banan', kategoria: 'owoc'}]`, użyj
metody `filter`, aby zwrócić tylko produkty z kategorii "owoc" */

/* const foods = [
    { nazwa: "Jabłko", kategoria: "owoc" },
    { nazwa: "Marchew", kategoria: "warzywo" },
    { nazwa: "Banan", kategoria: "owoc" },
];

const filteredFoods = foods.filter(function (fruit) {
    return fruit.kategoria.owoc
});

console.log(filteredFoods); */

/* Mając tablicę liczb `[1, 2, 3, 4, 5]`, użyj najpierw metody `map`,
aby podnieść każdą liczbę do kwadratu, a następnie użyj `filter`, aby wybrać tylko te
liczby, które są większe niż 10. */

/* const arrayNumbers = [1, 2, 3, 4, 5]; */


/* Napisz funkcję filterExpensiveProducts, 
która przyjmuje tablicę obiektów reprezentujących produkty. 
Każdy produkt ma klucze: name, price (cena) i category (kategoria). 
Funkcja powinna zwrócić nową tablicę, w której znajdą się tylko te produkty, których cena przekracza 100 zł. */


const newProducts = [
    { name: "Smartphone", price: 299, category: "electronics" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "Book", price: 45, category: "books" },
    { name: "Headphones", price: 85, category: "electronics" },
    { name: "Monitor", price: 150, category: "electronics" },
  ];

  const filterExpensiveProducts = newProducts.filter(function (productName) {
    return productName.price > 100
});

console.log(filterExpensiveProducts);

/* Napisz funkcję mapEmployeesToRoles, 
która przyjmuje tablicę obiektów reprezentujących pracowników. 
Każdy pracownik ma klucze: name, position (stanowisko) i salary (wynagrodzenie). 
Funkcja powinna zwrócić nową tablicę, 
w której znajdą się tylko ciągi znaków, które reprezentują stanowiska wszystkich pracowników. */

const employees = [
    { name: "Anna", position: "Manager", salary: 5000 },
    { name: "John", position: "Developer", salary: 4000 },
    { name: "Sarah", position: "Designer", salary: 3500 },
    { name: "Mark", position: "Developer", salary: 4500 },
  ];

  const mapEmployeesToRoles = employees.map(employees => employees.position);


console.log(mapEmployeesToRoles);

/* 
Napisz funkcję, która przyjmie dwa parametry - nazwę produktu i jaką kwotę wydał klient.

Funkcja zwróci informacje ile reszty należy wydać reszty klientowi. 
Jeśli klient dał za mało, żeby kupić dany produkt funkcja zwróci komunkat ile brakuje pieniędzy.  */


const produkty = [
    { nazwa: "Jabłko", cena: 3.5 },
    { nazwa: "Banan", cena: 4.2 },
    { nazwa: "Pomarańcza", cena: 5.0 },
    { nazwa: "Chleb", cena: 2.8 },
    { nazwa: "Mleko", cena: 3.0 },
    { nazwa: "Ser", cena: 8.5 }

function zakupy(nazwaProduktu, koszt) {
    return zapłata - koszt
    if (zakupy === 0) {
        console.log ('Brak reszty');
    } else if (zakupy > 0) {
        console.log ('Należna reszta');

    } else {
        console.log ('Brakuje pieniędzy');
    }
};

];

zakupy();

/* Napisz funkcję calculateAverage, która przyjmie jako argument tablicę liczb 
i zwróci ich średnią arytmetyczną. Jeśli tablica jest pusta, funkcja powinna zwrócić null. */

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if(numbers) {
            console.log('null');
        }
        return this.calculateAverage;
    }
  }

  
  
  console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
  console.log(calculateAverage([10, 20, 30])); // 20
  console.log(calculateAverage([])); // nul

/* 
  Napisz funkcję countCharacterFrequency, 
  która przyjmie jako argument łańcuch znaków i zwróci obiekt, 
  gdzie klucze to znaki, a wartości to liczba ich wystąpień w łańcuchu. 
  Funkcja powinna ignorować spacje. */

  function countCharacterFrequency(text) {
    return object
  }
  
  console.log(countCharacterFrequency("hello world")); 
  // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }


