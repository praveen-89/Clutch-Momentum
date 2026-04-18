# Route Inventory - Clutch Momentum

### Public Marketing Pages
| Path | Description | Access |
|------|-------------|--------|
| `/` | Homepage / Hero | Public |
| `/about` | Mission & Brand Vision | Public |
| `/pricing` | Plan comparisons | Public |
| `/how-it-works`| Step-by-step workflow | Public |
| `/contact` | Support & Inquiries | Public |
| `/privacy` | Legal / Data Policy | Public |
| `/terms` | Terms of Service | Public |

### Authentication
| Path | Description | Access |
|------|-------------|--------|
| `/login` | Creator portal login | Public |
| `/register` | Creator account creation | Public |
| `/forgot-password` | Password recovery UI | Public |
| `/admin-login` | Isolated admin portal login | Public (Admin Restricted) |

### Creator Panel `/(creator)`
| Path | Description | Access |
|------|-------------|--------|
| `/dashboard` | Main overview & credits | Creator Role |
| `/brand-contacts` | The Marketplace (Unlocks) | Creator Role |
| `/exclusive-leads` | Premium opportunities | Creator Role |
| `/usage` | Billing & Credit history | Creator Role |
| `/profile` | Creator identity & links | Creator Role |
| `/settings` | User preferences & security | Creator Role |

### Admin Panel `/(admin)`
| Path | Description | Access |
|------|-------------|--------|
| `/admin/dashboard` | Platform metrics | Admin Role |
| `/admin/manage-contacts` | Database CRUD | Admin Role |
| `/admin/manage-users` | Creator audit log | Admin Role |
| `/admin/subscriptions` | Monetization & Billing | Admin Role |
| `/admin/exclusive-requests` | Lead approval queue | Admin Role |
| `/admin/settings` | System-wide config | Admin Role |

## Navigation Rules

1. **Hierarchy**: Marketing -> Auth -> Panel.
2. **Persistence**: Users stay on their panel even after reload.
3. **Restricted Cross-Access**:
   - If a Creator tries to access `/admin/dashboard`, they are redirected to `/admin-login`.
   - If an Admin tries to access `/dashboard`, they are redirected to `/login`.
