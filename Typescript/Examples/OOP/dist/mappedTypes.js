"use strict";
/**
 * MAPPED TYPES IN TYPESCRIPT
 * * Concept: Create a new type based on another type by iterating
 * through its keys and applying a transformation.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* Result: {
  id: string;
  name: string;
  email: string;
  isActive: string;
}
*/
const userWihtStrings = {
    id: "123",
    name: "Alice",
    email: "some@gmail.com",
    isActive: "true"
};
console.log(userWihtStrings);
const userPermissions = {
    canUpdateId: false,
    canUpdateName: true,
    canUpdateEmail: true,
    canUpdateIsActive: false
};
console.log("Mapped Types allow for highly dynamic and type-safe code generation!");
//# sourceMappingURL=mappedTypes.js.map