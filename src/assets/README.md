# Assets Directory

Esta carpeta contiene todos los recursos estáticos del proyecto:

## Estructura:
- `images/` - Imágenes del proyecto (fotos, screenshots, etc.)
- `icons/` - Iconos SVG personalizados
- `fonts/` - Fuentes locales (opcional, si no usas Google Fonts)

## Uso:
```typescript
// Importar imágenes
import logoImg from '@/assets/images/logo.png'

// Importar iconos SVG
import ArrowIcon from '@/assets/icons/arrow.svg'
```

## Notas:
- Vite optimiza automáticamente las imágenes importadas
- Los archivos < 4KB se convierten a base64 inline
- Los archivos > 4KB mantienen sus URLs