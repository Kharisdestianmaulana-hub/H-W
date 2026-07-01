import os
import glob

files = glob.glob('*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    target = '<li><a href="contact.html">Contact</a></li>'
    replacement = '<li><a href="contact.html">Contact</a></li>\n        <li><a href="login.html" class="nav-auth-btn">Sign In</a></li>'
    
    if target in content and 'nav-auth-btn' not in content:
        content = content.replace(target, replacement)
        with open(f, 'w') as file:
            file.write(content)
        print(f"Updated {f}")
