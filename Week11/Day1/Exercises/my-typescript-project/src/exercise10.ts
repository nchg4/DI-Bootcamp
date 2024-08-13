function greet(name: string): string;
function greet(): string;
function greet(name?: string): string {
    return name ? `Hello, ${name}!` : "Hello, Guest!";
}