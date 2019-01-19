// Simple way to remove duplicate itens - Arrays

    // Using Integer values

    let numbers            = [0,0,1,1,2,3,4,4];

    let unique_numbers     = [...new Set(numbers)];

    console.log(unique_numbers);

    // Using String values

    let text                = ["A","A","B", "B", "C", "D"];

    let unique_text         = [...new Set(text)];

    console.log(unique_text);
