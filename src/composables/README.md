# Composables Directory

Esta carpeta contiene **composables** - funciones reutilizables que encapsulan lógica reactiva.

## ¿Qué son los Composables?
Los composables son funciones que:
- Usan la Composition API de Vue (ref, computed, watch, etc.)
- Encapsulan lógica que puede reutilizarse entre componentes
- Siguen el patrón de nomenclatura `use*`

## Ejemplos creados:
- `useTheme.ts` - Gestión del tema oscuro/claro

## Uso en componentes:
```vue
<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme, themeIcon } = useTheme()
</script>
```

## Próximos composables útiles:
- `useLocalStorage.ts` - Persistencia en localStorage
- `useApi.ts` - Llamadas HTTP reutilizables
- `useForm.ts` - Validación de formularios