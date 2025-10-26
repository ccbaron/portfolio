# Utils Directory

Esta carpeta contiene **utilidades** - funciones puras sin dependencias de Vue.

## ¿Qué son las Utils?
Las utilidades son funciones que:
- No usan reactive, ref, computed, etc.
- Son funciones puras (mismo input = mismo output)
- No tienen efectos secundarios
- Pueden usarse en cualquier lugar (Vue, Node.js, etc.)

## Ejemplos creados:
- `text.ts` - Funciones para manipular texto

## Diferencia con Composables:
```typescript
// ❌ Esto es un composable (usa Vue reactive)
export function useCounter() {
  const count = ref(0)
  return { count }
}

// ✅ Esto es una util (función pura)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}
```

## Próximas utils útiles:
- `api.ts` - Helpers para HTTP requests
- `validation.ts` - Validadores de formularios
- `constants.ts` - Constantes de la aplicación