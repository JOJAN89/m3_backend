## Helmet Configuration

### What
- Disabled CSP
- Enabled HSTS
- Frameguard deny

### Why
- CSP not needed for API (no HTML)
- HSTS enforces HTTPS
- Frameguard prevents clickjacking

### Sources
- https://helmetjs.github.io/
- https://owasp.org/www-project-secure-headers/

## CORS Configuration

### What
- Allowed origin: localhost
- Allowed methods: GET, POST, PUT, DELETE

### Why
- Prevents unauthorized access

### Sources
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny