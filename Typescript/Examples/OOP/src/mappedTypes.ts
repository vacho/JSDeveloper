/**
 * MAPPED TYPES IN TYPESCRIPT
 * * Concept: Create a new type based on another type by iterating 
 * through its keys and applying a transformation.
 */

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// 1. THE BASIC SYNTAX
// { [ Property in KeyType ]: NewValueType }
type Stringify<T> = {
    [P in keyof T]: string;
};

type StringUser = Stringify<User>;
/* 
Result: { 
  id: string; 
  name: string; 
  email: string; 
  isActive: string; 
} 
*/
const userWihtStrings: StringUser = {
    id: "123",
    name: "Alice",
    email: "some@gmail.com",
    isActive: "true"
};

console.log(userWihtStrings);


interface PartialUser {
    id?: number;
    name?: string;
}
// 2. MAPPING MODIFIERS (+ and -)
// You can add or remove 'readonly' and '?' (optional) modifiers.

// Create a type where all properties are Optional and Readonly
type LockedPartial<T> = {
    +readonly [P in keyof T]?: T[P];
};


// Create a type where all Optional properties become Required
type Concrete<T> = {
    [P in keyof T]-?: T[P];
};


type FixedUser = Concrete<PartialUser>; // { id: number; name: string; }

// 3. KEY REMAPPING (Using 'as')
// You can change the names of the keys as you map over them.
// This is very common for creating "getter" types.

type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type UserGetters = Getters<User>;
/*
Result: {
    getId: () => number;
    getName: () => string;
    getEmail: () => string;
    getIsActive: () => boolean;
}
*/

// 4. FILTERING KEYS
// You can use 'as' with 'never' to filter out specific properties.

type OnlyStrings<T> = {
    [P in keyof T as T[P] extends string ? P : never]: T[P];
};

type UserStrings = OnlyStrings<User>; // { name: string; email: string; }

// --- PRACTICAL EXAMPLE ---

/**
 * A "Permissions" type generator.
 * Converts a data object into a set of boolean flags.
 */
type PermissionFlags<T> = {
    [P in keyof T as `canUpdate${Capitalize<string & P>}`]: boolean;
};

const userPermissions: PermissionFlags<User> = {
    canUpdateId: false,
    canUpdateName: true,
    canUpdateEmail: true,
    canUpdateIsActive: false
};

console.log("Mapped Types allow for highly dynamic and type-safe code generation!");