## Dependency Injection

```typescript
@Optional() // Injects null if not found
@Self() // Only search for dependency in the current injector
@SkipSelf() // Skip the current injector and search in the parent injector
@Host() // Only search for dependency in the current element and its parents
```
