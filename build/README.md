# StormShift Labs Portfolio - Deployment Instructions

## SiteGround Shared Hosting Deployment

This is a production-ready build of the StormShift Labs portfolio website, optimized for SiteGround shared hosting.

### Deployment Steps:

1. **Upload Files**: 
   - Upload all files from this folder to your SiteGround `public_html` directory
   - Ensure the file structure is maintained

2. **Configure Contact Form**:
   - Open `contact.php` and replace `your-email@domain.com` with your actual email address
   - Test the contact form after deployment

3. **File Structure**:
   ```
   public_html/
   ├── index.html (main page)
   ├── assets/ (CSS and JavaScript files)
   ├── contact.php (contact form handler)
   ├── .htaccess (Apache configuration)
   └── README.md (this file)
   ```

### Features:
- ✅ Fully responsive design with mobile-optimized timeline
- ✅ SEO optimized with proper meta tags and title
- ✅ Optimized fonts loading (Orbitron + Inter only)
- ✅ Contact form with PHP backend (no Node.js required)
- ✅ Apache .htaccess for SPA routing and caching
- ✅ No server dependencies (pure static site with PHP contact form)
- ✅ Uniform card heights across Services and Portfolio sections
- ✅ Clean mobile timeline with proper connecting line

### Post-Deployment Checklist:
1. Test all page sections scroll properly
2. Verify contact form sends emails to your configured address
3. Check mobile responsiveness (especially timeline section)
4. Confirm all animations work smoothly
5. Test navigation between sections

### Contact Form Configuration:
Edit line 33 in `contact.php`:
```php
$to = 'your-email@domain.com'; // Replace with your actual email
```

The site is now ready for production use on SiteGround shared hosting!