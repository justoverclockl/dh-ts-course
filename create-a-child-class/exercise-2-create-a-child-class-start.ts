/**
 * START: Follow the instructions below.
 */

class Currency {
    name: string;
    private code: string;
    private symbol: string;

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    public describe(): void {
        const { name, code, symbol } = this
        let description = `The ${name} currency has the code ${code} and uses the symbol ${symbol}.`;

        console.log(description);
    }
}

// Alter this class to extend the `Currency` class.

type BankNoteType = Array<number>

class DetailedCurrency extends Currency {
    // Define a private field named `banknotes`.
    // Set the field type so it can be used to store an array of numbers.

    private banknotes: BankNoteType;

    // Add a `banknotes` parameter with the same type as the `banknotes` field.

    constructor(name: string, code: string, symbol: string, banknotes: BankNoteType) {

        // Fix this call to the parent constructor.
        super(name, code, symbol);
        // Store the value of the `banknotes` parameter in the corresponding field.
        this.banknotes = banknotes;
    }

    // Change the visibility modifier on this method so it can be called
    // by code outside of this class.

    public describeBankNotes() {
        // Change the visibility of the parent class `name` field so
        // that its value can be read here in this child class method.
        const { name, banknotes } = this
        let description = `The ${name} currency uses the banknotes `;

        // Replace `null` with the value of the `banknotes` field.

        description += banknotes;

        console.log(description);
    }

}

const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);

euroCurrency.describe();

euroCurrency.describeBankNotes();

// ----

export {};
